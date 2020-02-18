import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    //Кастомное свойство роута
    meta: {layout: 'empty'},
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "categories" */ '../views/Categories.vue')
  },
  {
    path: '/history',
    name: 'history',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "history" */ '../views/History.vue')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "planning" */ '../views/Planning.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/record',
    name: 'record',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "record" */ '../views/Record.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "detail" */ '../views/DetailRecord.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


//component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')