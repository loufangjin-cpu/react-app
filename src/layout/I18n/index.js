import React, { useEffect, useState } from 'react';
import selfLocale from './locale';
import locales from '@/locale';
import { useGlobalContext } from '../../store';
import lodash from 'lodash';
import Cookies from 'js-cookie';
import './index.less';
import intl from 'react-intl-universal';
import { Select } from 'antd';
const { Option } = Select;

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const [lang, curLang] = useState(Cookies.get('lang') || 'zh-cn')
    useEffect(() => {
        if (!lang) return;
        intl.load({ [lang]: lodash.get(locales, lang, {}) });
    }, [lang])
    const handleChange = (val) => {
        Cookies.set('lang', val);
        window.location.reload();
    }
    return (
        <div className="i18n">
            <Select defaultValue={lang} style={{ width: 120 }} onChange={handleChange}>
                <Option value="zh-cn">中文</Option>
                <Option value="en">英文</Option>
            </Select>
        </div>
    );
}
