import isEmpty from 'lodash/isEmpty'
import flattenDeep from 'lodash/flattenDeep'
import intersection from 'lodash/intersection';
// const authAccess = process.env.BSAPP_AUTH_WAY === 'access';
const authAccess = true;
function mergePath() {
  return [].reduce.call(
    arguments,
    (path, key) => {
      if (/^\/\w+/.test(key)) {
        return (path + key).replace(/\/+/g, '/')
      }
      return path
    },
    ''
  )
}

/**
 * @param {Array} routers
 * @param {Object} parent
 * @desc 支持继承父级path及roles
 */
export const inheritParentPathRoles = (routes, parent = {}) => {
  return routes.map((item) => {
    const path = mergePath(parent.path, item.path)
    const roles = item.roles || parent.roles || []
    const access = item.access || item.access || []
    return {
      ...item,
      path,
      roles,
      access,
      routes:
        Array.isArray(item.routes) &&
        !isEmpty(item.routes) &&
        inheritParentPathRoles(item.routes, { path, roles, access })
    }
  })
}
// 拍平路由
export const flattenRoutes = (routes) => {
  const _flatten = (items) => {
    return items.reduce((results, route) => {
      const { routes: subRoutes, ...item } = route
      if (Array.isArray(subRoutes)) {
        return results.concat([item, _flatten(subRoutes)])
      }
      return results.concat([item])
    }, [])
  }
  if (Array.isArray(routes)) {
    return flattenDeep(_flatten(routes))
  }
  return []
}

// 插入redirect路由, 默认routes下第一path
export const insertRouteRedirect = (routes = []) => {
  return routes.map((route) => {
    if (Array.isArray(route.routes) && !isEmpty(route.routes)) {
      const { redirect, component } = route
      // 如果redirect component都是空值则取routes第一个path作为重定向的值
      if (!redirect && !component) {
        const first = route.routes[0]
        return {
          ...route,
          routes: insertRouteRedirect(route.routes),
          redirect: first.path
        }
      }
      return {
        ...route,
        routes: insertRouteRedirect(route.routes)
      }
    }
    return route
  })
}


// 绑定路由权限
export const combineRoutePermissions = (routes, authKeys) => {
  return routes.map((item) => {
      let hasPermission = true;
      const { roles, access } = item;
      // authAccess 存在进行access权限控制过滤
      if (authAccess) {
          if (Array.isArray(access) && !isEmpty(access)) {
              hasPermission = !!intersection(access, authKeys).length;
          }
      } else {
          if (Array.isArray(roles) && !isEmpty(roles)) {
              hasPermission = !!intersection(roles, authKeys).length;
          }
      }
      if (authKeys === null) hasPermission = true;

      return {
          ...item,
          permission: hasPermission,
          routes:
              Array.isArray(item.routes) && !isEmpty(item.routes) && combineRoutePermissions(item.routes, authKeys),
      };
  });
};