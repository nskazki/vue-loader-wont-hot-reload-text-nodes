# Issue

https://github.com/vuejs/vue-loader/issues/1929 - HMR won't update SFC compiled with `vue-loader@15.9.8` when [`sideEffect=false`](https://webpack.js.org/guides/tree-shaking/#clarifying-tree-shaking-and-sideeffects) is used.

```js
module.exports = {
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      sideEffects: false
    }]
  }
}
```

However, without this option, Webpack would include into a bundle unused components should they be re-exported along with the used components via a common proxy.


```js
// Namespace/index.js - a common proxy

export { default as UsedComponent } from './UsedComponent.vue'
export { default as UnusedComponent } from './UnusedComponent.vue'
```

```js
// RootComponent.vue

<script>
import { UsedComponent } from './Namespace'

export default {
  components: {
    UsedComponent
  }
}
</script>

```

In this example, the `UnusedComponent` will be a part of a bundle unless the `sideEffects` option is set.
Unfortunately, when the option is set, HMR stops applying any changes to a root component and starts ignoring applied to text nodes of its nested components.

### Actual Behavior

1. HMR won't apply changes made to a root component.
2. HMR won't apply changes applied to existing lines of text, tags, and components of a child Vue components. However, new lines, tags, and components as well as removed ones will be reflected. Changes to the script and style section will always be reflected.

### Expected Behavior

Whether the `sideEffects` is set or not, HMR should pick up changes applied to any components.

# How to Reproduce

1. Run `npm run build` and check `dist/main.js`. You shouldn't find the `UsedComponent` in there.
2. Run `npm start`
3. Apply a few changes to the `src/RootComponent.vue`. Changes applied to the templates or script sections won't be reflected. Changes applied to the style section will be reflected.
4. Apply a few changes to the `src/Namespace/UsedComponent.vue`. Changes applied to the template section will be partially reflected. Changes appllied to the script and style sections will be fully reflected.
5. Run `npm start` and try updating the `RootComponent.vue` or `src/Namespace/UsedComponent.vue`. HMR will ignore changes applied to the root component and only partially update the child component.
6. Open the `webpack.config.js` and comment out the `sideEffects` option.
7. Run `npm run build` and check `dist/main.js` again. You should find the `UsedComponent` in there this time.
8. Run `npm start` and try updating the `RootComponent.vue` or `src/Namespace/UsedComponent.vue`. HRM should pick up any changes made to these components.
