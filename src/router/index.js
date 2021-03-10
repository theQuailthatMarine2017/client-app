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
    path: '/complete-registration',
    name: 'complete-registration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/biz-account',
    name: 'biz-account',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Main-Biz.vue'),
    
  },
  {
    path: '/regular-account',
    name: 'regular-account',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Main-Regular.vue')
    // beforeEnter: (to, from, next) => {
    //   // ...
    //   if(localStorage.getItem('user') === null){

    //     next('/')
    //   }else {

    //     next(to.path)
    //   }
    // }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
