import moment from 'moment';
import { useState } from 'react';
import intl from 'react-intl-universal';
import localeMap from './localeMap';
import lodash from 'lodash';

/**更新国际化本地语言包 */
export default function useUpdateLocale(locale = []) {
    const defaultLang = window.navigator.language;
    const [antdLocale, setAntdLocale] = useState(null);
    const [curLocale = defaultLang, locales = {}] = locale;
    const { locales: lastLocales } = intl.getInitOptions();
    const currentLocale = curLocale.toLowerCase().replace(/_/, '-');
    const fullLocales = lodash.merge({}, lastLocales, locales);
    const warningHandler = () => {}; // TODO: 由于正常情况下也会warning，所以暂时忽略。参数：message, detail
    intl.init({ currentLocale, warningHandler, locales: fullLocales, fallbackLocale: 'zh-cn' })
        .then(localeMap.moment[currentLocale]) //动态引入moment语言包
        .then(() => moment.locale(currentLocale)) //设置moment语言包
        .then(localeMap.antd[currentLocale]) //动态引入antd语言包
        .then(({ default: lang } = {}) => setAntdLocale(lang)) //设置antd语言包
        .then(() => document.documentElement.setAttribute('lang', curLocale)) //设置文档语言
        .catch((e) => console.error(e));
    return antdLocale;
}
