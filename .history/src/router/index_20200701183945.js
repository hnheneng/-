import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Page from '../views/page/Page.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    redirec:'/'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Sign in/Login.vue')
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import('../views/location/Address.vue')
  },
  
  {
    path: '/details',
    name: 'Details',
    component: () => import('../views/location/Details.vue')
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import('../views/location/Edit.vue')
  },
  {
    path: '/fuzzy',
    name: 'Fuzzy',
    component: () => import('../views/location/Fuzzy.vue')
  },
  {
    path: '/evaluate',
    name: 'Evaluate',
    component: () => import('../views/location/Evaluate.vue')
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('../views/location/personal.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/location/Order.vue')
  },
  {
    path: '/modify',
    name: 'Modify',
    component: () => import('../views/location/Modify.vue')
  },
  {
    path: '/collection',
    name: 'Collection',
    component: () => import('../views/location/Collection.vue')
  },
  {
    path: '/all',
    name: 'All',
    component: () => import('../views/location/All.vue')
  },
  {
    path: '/comments',
    name: 'comments',
    component: () => import('../views/location/All.vue')
  },
  {
    path: '/recent',
    name: 'Recent',
    component: () => import('../views/location/Recent.vue')
  },
  {
    path: '/center',
    name: 'Center',
    component: () => import('../views/location/Center.vue')
  },
  {
   path: '/',
   component: Page , 
    children:[
      {
        path: '',
        name: 'Home',
        component: Home
    },
    {
      path: 'membership',
      name: 'Membership',
      component: ()=> import('../views/my/Membership.vue')
  },
  {
    path: '/classification',
    name: 'classification',
    component: () => import('../views/classification/classification.vue')
  },
  {
    path: '/shoppingcart',
    name: 'Shoppingcart',
    component: () => import('../views/Shoppingcart/Shoppingcart.vue')
  },

]
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import('../views/location/location.vue')
  },
]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
