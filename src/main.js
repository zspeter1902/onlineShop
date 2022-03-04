import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import '@/element-ui'
import '@/styles/element-variables.scss'
import 'element-ui/lib/theme-chalk/display.css'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/permission' // permission control

Vue.prototype.$EventBus = new Vue()

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
