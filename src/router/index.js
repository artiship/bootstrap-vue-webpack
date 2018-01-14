import Vue from 'vue'
import Router from 'vue-router'

import About from '@/components/About'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/about', component: About}
  ]
})
