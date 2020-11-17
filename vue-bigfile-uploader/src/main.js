import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import uploader from 'vue-simple-uploader'

Vue.config.productionTip = false
Vue.use(uploader)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
