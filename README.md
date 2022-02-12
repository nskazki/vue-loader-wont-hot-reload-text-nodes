HMR won't update SFC compiled with `vue-loader@15.9.8` when [`sideEffect=false`](https://webpack.js.org/guides/tree-shaking/#clarifying-tree-shaking-and-sideeffects) is used.

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
