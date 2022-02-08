import { getSubLocale } from './_utils';
import configLocales from '../config/locale/zh_CN.js';
const context = require.context('../pages', true, /^\.\/([^/]+)\/locale\/index\.js$/);

const locale = 'zh-cn';

export default {
    locale,
    ...getSubLocale(context, locale),
    ...configLocales,
};
