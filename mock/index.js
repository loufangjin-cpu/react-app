const utils = require('./utils')
function Mocker(app) {
  console.log('Mocker enter')
  app.use(async function middleware(req, res, next) {
    const mockConfig = utils.requireUncached('./mock.config')
    const getPayLoad = function () {
      return new Promise(function (resolve) {
        let data = ''
        req.on('data', function (chunk) {
          data += chunk
        })
        req.on('end', function () {
          resolve(JSON.parse(data))
        })
      })
    }
    if (mockConfig.enable) {
      const path = req.path.split('?')[0]
      console.log('req:', req.path)
      if (mockConfig.api[path]) {
        console.log('mock:', req.path)
        const data = await mockConfig.api[path](req, { getPayLoad })
        data._debug = {
          msg: '这是一个mock数据'
        }
        res.json(data)
        return
      }
    }
    next()
  })
}

module.exports = Mocker
