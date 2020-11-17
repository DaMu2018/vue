import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/BasicLayout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/home',
    component: Layout,
    children:[
      {
        path:"/home",
        name:"home",
        component:() => import(/* webpackChunkName: "subApp" */ '@/views/Home'),
      },
      {
        path:"/about",
        name:"about",
        component:() => import(/* webpackChunkName: "subApp" */ '@/views/About'),
      },
    ]
  },
  {
    path: '/dp',
    name: 'Home',
    redirect:'/dp/ui/home',
    component: Layout,
    children:[
      {
        path:"/dp/ui/about",
        name:"about",
        component:() => import(/* webpackChunkName: "subApp" */ '@/views/About'),
      },
    ]
  },
  {
    path: '/app1',
    name: 'SubApp',
    component: () => import(/* webpackChunkName: "subApp" */ '../views/SubApp.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
