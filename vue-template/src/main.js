// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import filter from './filter/filter'

import './css/reset.css'

import { server } from './provider/http-service'

// 定义全局变量
Vue.prototype.$server = server

// 在应用启动时，关闭生产模式下给出的提示
Vue.config.productionTip = false

Vue.prototype.axios = axios

axios.defaults.headers.post['Content-type'] = 'application/json'



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    filter,
    components: { App },
    template: '<App/>'
})
