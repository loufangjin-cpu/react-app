import Cookies from 'js-cookie';
import locales from '@/locale';
// 设置默认语言
function defaultLanguage() {
    let language = Cookies.get('lang');
    let browserLang = navigator.language.toLocaleLowerCase();
    let defaultLanguage = language ? language : locales[browserLang] ? browserLang : 'zh-cn';
    return defaultLanguage;
}
export const language = defaultLanguage();
