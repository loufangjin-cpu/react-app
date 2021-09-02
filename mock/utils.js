function getApi(path, controller, timeout) {
  return async (req, res) => {
    let common = {},
      special = {},
      innerConfig = {}

    let referer = req.headers.referer
    let match = /(\/[^/]+){2}\.html/.exec(referer)
    if (match) innerConfig.__pagename = match[1]

    Object.keys(controller).forEach((key) => {
      let pageName = key.substr(1)
      let reg = new RegExp('^(?!#)')
      if (reg.test(key)) {
        common[key] = controller[key]
      } else if (RegExp(`/${pageName}.html`).test(referer)) {
        special = controller[key]
        innerConfig.__pagename = pageName
      }
    })
    let ctrler = Object.assign({ normal: true }, common, special, innerConfig)
    const data = await requireUncached(path)(req, { ...ctrler, ...res })
    return new Promise((resovle) => {
      setTimeout(() => resovle(data), timeout || 500)
    })
  }
}

function requireUncached(path) {
  delete require.cache[require.resolve(path)]
  return require(path)
}

module.exports = {
  requireUncached,
  getApi,
  asyncData: function asyncData(time, data) {
    return new Promise((resovle, reject) => {
      setTimeout(() => resovle(data), time)
    })
  }
}

module.exports.default = module.exports
