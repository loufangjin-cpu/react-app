import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
// import { indexRoute } from '@/config/menus'
// import { getPageTitle } from '@/utils/util.url';
import AuthPathName from '@/components/AuthPathName';
import lodash from 'lodash'
// import intl from 'react-intl-universal';

/* 路由构造器 */
const createRoutes = (routes, extraProps = {}, switchProps = {}) => (
  <Switch {...switchProps}>
    {/* {indexRoute && (
      <Route path="/" exact render={() => <Redirect to={indexRoute} />} />
    )} */}
    {routes.map((item) => {
      const { path, redirect, permission, exact = true, meta, ...other } = item
      return (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={(props) => {
            // if (lodash.isPlainObject(meta)) {
            //     const { title: tempTitle } = meta;
            //     //兼容title国际化
            //     let title = tempTitle;
            //     if (typeof tempTitle === 'function') {
            //         title = tempTitle(intl);
            //     }
            //     document.title = getPageTitle(title);
            // }
            return <AuthPathName {...props} {...extraProps} item={item}></AuthPathName>;
          }}
        />
      )
    })}
    <Route path="*" exact render={() => <Redirect to="/exception/404" />} />
  </Switch>
)

export default createRoutes
