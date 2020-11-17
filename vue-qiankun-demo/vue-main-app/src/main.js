import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from "qiankun"
Vue.config.productionTip = false
let app = null;
window.SYS_NAME='dp'
function render({ appContent, loading } = {}) {
  if (!app) {
      app = new Vue({
          el: "#app",
          router,
          store,
          data() {
              return {
                  content: appContent,
                  loading
              };
          },
          render(h) {
              return h(App, {
                  props: {
                      content: this.content,
                      loading: this.loading
                  }
              });
          }
      });
  } else {
      app.content = appContent;
      app.loading = loading;
  }
}

/**
 * 路由监听
 * @param {*} routerPrefix 前缀
 */
function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

function initApp() {
  render();
}

initApp();
// 传入子应用的数据
let msg = {
  data: {
      auth: false,
      token:'11111'
  },
  fns: [
      {
          name: "_LOGIN",
          _LOGIN(data) {
              console.log(`父应用返回信息${data}`);
          }
      }
  ]
};
// 注册子应用
registerMicroApps(
  [
      {
          name: "sub-app",
          entry: "//localhost:8081",
          render,
          activeRule: genActiveRule("/app"),
          props: msg
      },
      {
          name: "ylwz",
        //   entry: "http://ylwz.demo.cddpi.com/",
          entry: "http://ylwz.demo.cddpi.com:8081/",
        // entry: "http://localhost:5013/",
        //   entry: "//localhost:8000",
          render,
        //   container:"#appContainer",
          activeRule: genActiveRule("/dp/ui/ylwz/ui"),
          props: msg
      },
  ],
  {
      beforeLoad: [
          app => {
              console.log("f before load", app);
          }
      ], // 挂载前回调
      beforeMount: [
          app => {
              console.log("f before mount", app);
          }
      ], // 挂载后回调
      afterUnmount: [
          app => {
              console.log("f after unload", app);
          }
      ] // 卸载后回调
  }
);

// 设置默认子应用,与 genActiveRule中的参数保持一致
// setDefaultMountApp("/app1");

// 启动
start();
