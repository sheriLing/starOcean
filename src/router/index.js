import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import axios from 'axios'

Vue.use(VueRouter)

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://192.168.137.1:8085'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    // route level code-splitting
    // this generates a separate chunk (search.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "search" */ '../views/Search')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import(/* webpackChunkName: "category" */ '../views/Category')
  },
  {
    path: '/design',
    name: 'design',
    component: () => import(/* webpackChunkName: "design" */ '../views/Design')
  },
  {
    path: '/design/editor',
    name: 'dseditor',
    component: () => import(/* webpackChunkName: "design" */ '../views/Design/Editor')
  }
]

const router = new VueRouter({
  routes
})

export default router
