module.exports = {
  // 请求单个
  devServer: {
    proxy: '开发环境后台地址'
  },

  // 请求多个
  devServer: {
    proxy: {
      '自定义前端请求前缀': {
        target: '开发环境后台地址',
        pathRewrite: {
          '^/自定义前端请求前缀': '/后台真实前缀'
        }
      }
    }
  }
}