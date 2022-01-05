const path = require('path');
//const _ = require('lodash');
const { exec } = require('child_process');
const fs = require('fs-extra');
//
const beautify = require('json-beautify');
const { PROJ_PATH, PAGE_PATH, CONFIG_LOCALE } = require('./utils/constant');
const { readSingleLangPack } = require('./utils/read-single-lang-pack');

// 新增语言需要添加
const langMap = {
  //   中国香港: 'zh_HK',
  //   日本: 'ja',
  // 中国: 'zh_CN',
  泰语: 'th',
  越南语: 'vi',
  印尼: 'id',
  英文: 'en',
};

Object.entries(langMap).forEach( ([counrey, lang]) => {
  // 返回excel组合而成的json对象
  const result = readSingleLangPack(counrey)
  Object.entries(result).forEach(([dirName, content]) => {
    // 定义整个路径
    let wholePath = path.resolve(PROJ_PATH, PAGE_PATH, dirName, 'locale', `${lang}.js`);
    if(dirName === 'config') {
      wholePath = path.resolve(PROJ_PATH, CONFIG_LOCALE, `${lang}.js`);
    }
    // fs.ensureFileSync(wholePath)
    // fs.ensureFileSync(wholePath, `export default ${beautify(content, null, 2, 100)}`)
    fs.writeFileSync(wholePath, `export default ${beautify(content, null, 2, 100)}`)
  })
})

// 格式化
const formatPath = `prettier --config ${PROJ_PATH}.prettier.js --write '${PROJ_PATH}src/pages/*/locale/*.js'`;
const formatPath1 = `prettier --config ${PROJ_PATH}.prettier.js --write '${PROJ_PATH}src/config/locale/*.js'`;
exec(formatPath);
exec(formatPath1);