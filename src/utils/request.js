// 这里面是对请求的操作
import axios from 'axios'

// create an axios instance
const service = axios.create({
  timeout: 5000, // 请求超时时间设置,
  baseURL: 'http://localhost:8081' // api的base_url
})



// 返回体中需要进行的操作
// service.interceptors.response.use(
//   response => {
//     const res = response.data
//     // if the custom code is not 20000, it is judged as an error.
//     if (res.status !== 100) {
//     } else {
//       return res
//     }
//   },
//   error => {
//     console.log('err' + error) // for debug
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 5 * 1000
//     })
//     return Promise.reject(error)
//   }
// )
export default service