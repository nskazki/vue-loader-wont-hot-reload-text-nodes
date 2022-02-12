import Vue from 'vue'
import RootComponent from './RootComponent.vue'

const App = Vue.extend(RootComponent)
const target = document.createElement('div')
document.body.append(target)

new App({
  el: target
})
