import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import friends from '@/views/friends/friends'
import shop from '@/views/shop/shop'
import home from '@/views/home/home'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/friends',
      name: 'friends',
      component: friends
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
