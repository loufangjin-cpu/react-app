import find from 'lodash/find'
import menus from '@/config/menus'
import combineComponent from './combineComponent'

import {
  flattenRoutes,
  getAuthorityKeys,
  insertRouteRedirect,
  inheritParentPathRoles,
  combineRoutePermissions
} from './_util'
import createRoutes from './createRoutes'
const routes = inheritParentPathRoles(menus)
// 获取侧边栏
export const getSideMenus = (key) => {
  if (!key) return routes
  const { routes: sideRoutes } = find(routes, ({ path }) => path === key) || {}
  return sideRoutes || []
}
export const pageRoutes = combineComponent(
  flattenRoutes(insertRouteRedirect(routes))
)

export { createRoutes, combineRoutePermissions }
