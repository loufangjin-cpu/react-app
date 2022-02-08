//! 使用require.context实现前端工程自动化, 一般使用在组件内引入多个组件
// require.context(directory,useSubdirectories,regExp)
// directory:表示检索的目录
// useSubdirectories：表示是否检索子文件夹
// regExp:匹配文件的正则表达式,一般是文件名
// 例如 require.context("@/views/components",false,/.vue$/)
const context = require.context('./', false, /(.*(?<!(index|_utils)))\.js/);
const locales = {};
context.keys().reduce((store, k) => {
    const locale = (context(k) || {}).default || {};
    const key = locale.locale;
    if (key) {
        store[key] = locale;
    }
    return store;
}, locales);

// ! 输出语言包对象locales
// {
//     'zh-cn':{ GREET: "你好"},
//     en:{ GREET:"HELLO"}
// }
// ! 初始化语言包
// intl.load({ [value]: lodash.get(locales, value, {}) });
console.log('locales??', locales)
export default locales;
