import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ComponentsA from '@/components/ComponentsA'
import ComponentsB from '@/components/ComponentsB'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'ComponentsA',
      component: ComponentsA
    },
    {
      path: '/b',
      name: 'ComponentsA',
      component: ComponentsB
    }
  ]
})
