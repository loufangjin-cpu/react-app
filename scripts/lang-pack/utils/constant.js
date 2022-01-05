const path = require('path');

// 项目路径
const PROJ_PATH = path.resolve(__dirname, '../../../') + '/';
// 页面所在相对路径
const PAGE_PATH = 'src/pages/';
//语言包文件夹名字
const LOCAL_DIR = 'locale';
// 全局配置的语言包相对路径
const CONFIG_LOCALE = 'src/config/locale';
// 中文语言包文件名
const ZH_CN_FILENAME = 'zh_CN.js';

module.exports = {
    PROJ_PATH,
    PAGE_PATH,
    LOCAL_DIR,
    CONFIG_LOCALE,
    ZH_CN_FILENAME,
};
