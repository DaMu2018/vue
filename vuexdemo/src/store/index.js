import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters' // 导入响应的模块，*相当于引入了这个组件下所有导出的事例
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

// 首先声明一个需要全局维护的状态 state,比如 我这里举例的resturantName
const state = {
  resturantName: '初始餐厅', // 默认值
  id: 1,
  name: 'A-Sir'
}

const store = new Vuex.Store({
  state, // 共同维护一个状态，state里面可以有很多全局变量
  getters, // 获取数据并渲染
  actions, // 数据的异步操作
  mutations // 处理数据的唯一途径，state的改变或赋值只能在这里
})
export default store // 到处store并在main.js中引用注册
