import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import login from '../page/loginpage.vue'

Vue.use(Router)
Vue.use(ElementUI)
const router = new Router({
  routes: [

    {
      path: '/login',
      component: login
    }, {
      path: "/home",
      component: () => import('../page/home/home.vue'),
      name: 'home',
    },
    {
      path: '/course',
      component: () => import('../page/course/index.vue'),
      name: 'course',
      props: true, // 路由中的params会当作props传入组件中
      meta: {
        noCache: true, // 是否缓存，切换页签的时候不重新查找
        currentTab: 'priceManagement', // 询比价发布确认
        layout: 'layout' // 布局样式选择带菜单和标签栏的layout类型
      }
    },
  ]
})


// // 全局前置守卫：初始化时执行、每次路由切换前执行
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

// // 全局后置守卫：初始化时执行、每次路由切换后执行
// router.afterEach((to, form) => {
//   console.log('afterEach', to, form)
//   if (to.meta.title) {
//     document.title = to.meta.title
//   } else {
//     document.title = "xxx系统"
//   }
// })


export default router
