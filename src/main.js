// 该文件是项目的入口文件
// 引入Vue
import Vue from 'vue'
// 引入App组件，他是所有组件的父组件
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

// 关闭Vue的生产提示
Vue.config.productionTip = false

Vue.prototype.axios = axios

Vue.use(VueRouter)

Vue.use(ElementUI)

// axios.defaults.baseURL = "http://localhost:8081"

// 创建Vue实例对象 --vm
new Vue({
  rander: a => a(App),// 将app组件放入容器中
  router: router,
  ...App
}).$mount('#app')
