import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Sign in/Login.vue')
  },
  {
    path: '/page',
    name: 'Page',
    component: () => import('../views/page/Page.vue'),
    children:[
      {
        path: '',
        name: 'Home',
        component: Home
    },]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
