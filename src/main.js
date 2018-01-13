import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import Router from 'vue-router'
import routes from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

const router = new Router({
  mode: 'history',
  routes: []
})

Vue.use(Router)
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
