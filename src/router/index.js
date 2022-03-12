import Vue from 'vue'
import Router from 'vue-router'
import App from '../app'

Vue.use(Router)
const routes = [
  {
    path: '/', component: App,
    redirect: 'login',
    children: [
      {
        path: '/',
        name: 'login',
        component: () => import('@/page/loginpage.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/page/loginpage.vue')
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/page/home.vue')
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  baseUrl: "http://localhost:8080",
  routes
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
