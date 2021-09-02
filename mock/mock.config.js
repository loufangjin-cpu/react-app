const { triggerFocus } = require('antd/lib/input/Input')
const utils = require('./utils')

const mockConfig = {
  enable: true, // 是否启用mock
  api: {
    '/opapi/sms/list': true // 获取历史列表
  }
}

Object.keys(mockConfig.api).forEach((key) => {
  let controller = mockConfig.api[key]
  if (controller) {
    mockConfig.api[key] = utils.getApi(`.${key}`, controller)
  }
})
module.exports = mockConfig
