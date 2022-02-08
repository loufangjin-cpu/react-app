import { getSubLocale } from './_utils';
import configLocales from '../config/locale/th.js';
const context = require.context('../pages', true, /^\.\/([^/]+)\/locale\/index\.js$/);

const locale = 'th';

export default {
    locale,
    ...getSubLocale(context, locale),
    ...configLocales,
};
