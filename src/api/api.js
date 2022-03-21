import request from '../utils/request'

export function api () {
  return request({
    url: '/login',
    method: 'get'
  })
}