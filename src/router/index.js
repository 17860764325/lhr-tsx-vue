import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import login from '../page/loginpage.vue'

Vue.use(Router)
Vue.use(ElementUI)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})



// router.beforeEach((to, from, next) => {
//   if (to.path.startsWith('/login')) {
//     window.sessionStorage.removeItem('access-token');
//     next();
//   } else {
//     let token = window.sessionStorage.getItem('access-token');
//     if (!token) {
//       // 未登陆
//       next({ path: '/login' })
//     } else {
//       next();
//     }
//   }
// })
export default router
