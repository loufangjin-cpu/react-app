import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import lodashDefault from 'lodash/defaults';
import { ConfigProvider as AntConfigProvider } from 'antd';
import GlobalContext, { useGlobalContext } from '../../store';
import useUpdateLocale from './locale';
import useGlobalReducer from '../../store/reducer';

/** 业务项目使用这个Provider， 默认配置了 history 和 locale */
export const ConfigContextProvider = (props) => {
    const context = useGlobalContext();
    const reducer = useGlobalReducer();
    const { locale: [locale = []] = [] } = reducer;
    const antdLocale = useUpdateLocale(locale);
    const defaultHistory = useHistory();
    const { theme = 'dark', history = defaultHistory, children, antGlobalConfig = {} } = props;
    const data = lodashDefault({}, reducer, { theme, history }, context);
    return (
        <AntConfigProvider locale={antdLocale} {...antGlobalConfig}>
            <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
        </AntConfigProvider>
    );
};
