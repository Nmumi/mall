import Vue from 'vue'
import Router from 'vue-router'

import home from 'views/home/Home'
import cart from 'views/cart/Cart'
import category from 'views/category/Category'
import profile from 'views/profile/Profile'

 Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/category',
      component: category
    },
    {
      path: '/profile',
      component: profile
    }
  ],
  mode:'history'
})
export default router
