import Vue from 'vue'
import MyComponent from './MyComponent.vue'

const App = Vue.extend(MyComponent)
const target = document.createElement('div')
document.body.append(target)

new App({
  el: target
})
