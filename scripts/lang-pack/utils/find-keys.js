const fs = require('fs-extra');
const path = require('path');
const flatObject = require('./flat-object');
const { PROJ_PATH, PAGE_PATH, LOCAL_DIR, CONFIG_LOCALE, ZH_CN_FILENAME } = require('./constant');

const findAllKeys = () => {
  const dataset = {}
  const file = PROJ_PATH + PAGE_PATH
  // 获取存放语言包的文件夹
  let localList = fs.readdirSync(file)
    .map((fileName) => {
      const fullPath = path.join(PROJ_PATH, PAGE_PATH, fileName, LOCAL_DIR)
      const exists = fs.existsSync(fullPath)
      return exists ? fullPath : ''
    })
    .filter(n => !!n)
    // [/Users/loufangjin/Desktop/fish/kid-oversea-crm/src/pages/DataMarket/locale']
    localList.forEach((locale, idx) => {
      const dirList = locale.split('/')
      const dirName = dirList[dirList.length - 2]
      const zh_cn_fil_path = path.resolve(locale, ZH_CN_FILENAME)
      let data = fs.readFileSync(zh_cn_fil_path, 'utf-8').replace('export default', 'module.exports = ')
      fs.ensureDirSync('./temp')
      fs.writeFileSync(`./temp/module${idx}.js`, data)
      const obj = require(`../../../temp/module${idx}`)
      const rr = flatObject(obj, dirName);
      Object.assign(dataset, rr)
    })
    return dataset
}
module.exports = findAllKeys