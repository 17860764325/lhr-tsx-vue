//进行远程调用
import axios from 'axios'
// 包装parm参数
import qs from 'qs'
// 声明基础访问地址
axios.defaults.baseURL = '/api'

// 声明一个调用方法
export const api = params => {
  return axios.get('/login')
}