import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shoppingcart',
    name: 'ShoppingCart',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShoppingCart.vue')
  },
  {
    path: '/newproduct',
    name: 'NewProduct',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewProduct.vue')
  },
  {
    path: '*',
    redirect: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
