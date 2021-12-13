import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { indexRoute } from '@/config/menus'
import AuthPathName from '@/components/AuthPathName'

/* 路由构造器 */
const createRoutes = (routes, extraProps = {}, switchProps = {}) => (
  <Switch {...switchProps}>
    {indexRoute && (
      <Route path="/" exact render={() => <Redirect to={indexRoute} />} />
    )}
    {routes.map((item) => {
      const { path, redirect, permission, exact = true, meta, ...other } = item
      return (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={(props) => {
            return (
              <AuthPathName
                {...props}
                {...extraProps}
                item={item}
              ></AuthPathName>
            )
          }}
        />
      )
    })}
    <Route path="*" exact render={() => <Redirect to="/exception/404" />} />
  </Switch>
)

export default createRoutes
