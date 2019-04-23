// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index'
import ZkTable from 'vue-table-with-tree-grid'

Vue.use(Vuex)
Vue.component(ZkTable.name, ZkTable)

Vue.config.productionTip = false

// // 首先声明一个需要全局维护的状态 state,比如 我这里举例的resturantName
// const store = new Vuex.Store({
//   // 初始化statte以及mutations
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })

// store.commit('increment')
// console.log(store.state.count) // -> 1

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  components: { App },
  template: '<App/>'
})
