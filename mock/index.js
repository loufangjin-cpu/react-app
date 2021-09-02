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
      // /opapi/sms/list
      console.log('req:', req.path)
      //  /opapi/sms/list
      console.log('path', path)
      if (mockConfig.api[path]) {
        // /opapi/sms/list { '/opapi/sms/list': [AsyncFunction (anonymous)] }
        console.log('mock:', req.path, mockConfig.api)
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
