import { getSubLocale } from './_utils';
import configLocales from '../config/locale/en.js';
const context = require.context('../pages', true, /^\.\/([^/]+)\/locale\/index\.js$/);

const locale = 'en';

export default {
    locale,
    ...getSubLocale(context, locale),
    ...configLocales,
};
