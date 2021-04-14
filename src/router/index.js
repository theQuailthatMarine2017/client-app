import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/complete-registration',
    name: 'complete-registration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/agents-portal-login',
    name: 'agents-portal-login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AgentsLogin.vue')
  },
  {
    path: '/agents-portal',
    name: 'agents-portal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AgentsPortal.vue'),
  },
  {
    path: '/adds-agent',
    name: 'adds-agent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddAgent.vue')
  },
  {
    path: '/adds-property',
    name: 'adds-property',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddProperty.vue')
  },
  {
    path: '/adds-holiday',
    name: 'adds-holiday',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddHoliday.vue')
  },
  {
    path: '/manage-agent',
    name: 'manage-agent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ManageAgent.vue')
  },
  {
    path: '/manage-property',
    name: 'manage-property',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ManageProperty.vue')
  },
  {
    path: '/',
    name: 'Home',
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
  },
  {
    path: '/view-property',
    name: 'view-property',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Main-Biz.vue'),
    
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
