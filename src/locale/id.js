import { getSubLocale } from './_utils';
import configLocales from '../config/locale/id.js';
const context = require.context('../pages', true, /^\.\/([^/]+)\/locale\/index\.js$/);

const locale = 'id';

export default {
    locale,
    ...getSubLocale(context, locale),
    // ...configLocales,
};
