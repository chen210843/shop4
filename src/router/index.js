import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import login from '../components/login.vue'
import address from '../views/address.vue'
import order from '../views/order.vue'
import home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: login
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component:login
  // }
  {
    path: '/about',
    name: 'about',
    component: address
  },
  {
    path: '/home',
    name: 'about',
    component: home
  },
  {
    path: '/order',
    name: 'Order',
    component: order
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
