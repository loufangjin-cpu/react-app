import { useState } from 'react';
import { language } from '@/utils/setLanguage';

export default function useGlobalReducer(state = {}) {
    return {
        /**全局locale语言包*/
        locale: useState([language, {}]),
    };
}
