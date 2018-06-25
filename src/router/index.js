import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
