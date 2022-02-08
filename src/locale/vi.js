import { getSubLocale } from './_utils';
import configLocales from '../config/locale/vi.js';
const context = require.context('../pages', true, /^\.\/([^/]+)\/locale\/index\.js$/);

const locale = 'vi';

export default {
    locale,
    ...getSubLocale(context, locale),
    ...configLocales,
};
