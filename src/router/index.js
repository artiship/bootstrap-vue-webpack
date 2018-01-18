import Vue from 'vue'
import Router from 'vue-router'

import News from '@/views/News'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/news', component: News}
  ]
})
