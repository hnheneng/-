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
  },]
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import('../views/location/location.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
