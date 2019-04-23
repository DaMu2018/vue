import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ComponentsA from '@/components/ComponentsA'
import ComponentsB from '@/components/ComponentsB'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ComponentsA',
      component: ComponentsA
    },
    {
      path: '/a',
      name: 'ComponentsA',
      component: ComponentsA
    },
    {
      path: '/b',
      name: 'ComponentsB',
      component: ComponentsB
    }
  ]
})