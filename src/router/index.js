// import Vue from 'vue'
// import Router from 'vue-router'

import About from './../components/About.vue'
import Home from './../components/Home.vue'

// Vue.use(Router)


const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About}
]

// const router = new Router({
//   mode: 'history',
//   routes
// })

export default {
  routes
}
