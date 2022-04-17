import request from '../../utils/request'


export function getClassification () {
  return request({
    url: '/classification/getAll',
    method: 'get'
  })
}