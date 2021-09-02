const { createProxyMiddleware } = require('http-proxy-middleware')
// const apiUrl = 'https://test.ipalfish.com/' // 测试

module.exports = function (app) {
  // app.use(
  //   createProxyMiddleware('/klian', {
  //     target: apiUrl,
  //     changeOrigin: true,
  //     // pathRewrite: {
  //     //   '^/api': '/api'
  //     // },
  //     secure: true //如果访问的是https类的链接，就需要设置为true
  //   })
  // )
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:3000',
      changeOrigin: true
      // secure: true //如果访问的是https类的链接，就需要设置为true
    })
  )
}
