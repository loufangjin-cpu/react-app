/* 路由组件构造器 */
import React, { Suspense } from 'react'
import { Redirect } from 'react-router'
import isString from 'lodash/isString'
import { isValidElementType, isLazy } from 'react-is'
import { Spin } from 'antd'

function PageLoading() {
  return (
    <div style={{ paddingTop: 100, textAlign: 'center' }}>
      <Spin size="large" />
    </div>
  )
}

const getDisplayName = (Component = {}) =>
  Component.displayName || Component.name || 'RouteComponent'

const lazyCache = new Map([])

// 路由组件构造器
const withRouteComponent = ({ path, redirect, component }) => {
  let RealComponent
  if (isString(component) && component !== '') {
    let LazyComponent = null
    if (lazyCache.get(component)) {
      LazyComponent = lazyCache.get(component)
    } else {
      LazyComponent = React.lazy(() => {
        return import(`@/${component}`)
      })
      lazyCache.set(component, LazyComponent)
    }
    RealComponent = LazyComponent
  } else {
    RealComponent = component
  }

  function RenderComponent({ component, ...props }) {
    if (redirect) {
      return <Redirect to={redirect} from={path} />
    }

    if (isValidElementType(RealComponent) || isLazy(RealComponent)) {
      return (
        <Suspense fallback={<PageLoading />}>
          <RealComponent {...props} />
        </Suspense>
      )
    }

    return <div style={{ padding: '10px' }}>找不到路由组件</div>
  }

  RenderComponent.displayName = getDisplayName(RealComponent)

  return RenderComponent
}

const combineComponent = (routes = []) =>
  routes.map((route) => ({
    ...route,
    component: withRouteComponent(route)
  }))

export default combineComponent
