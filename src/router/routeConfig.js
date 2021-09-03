/* 根路由 */

import BasicLayout from '@/layout'
import Exception from '@/components/Exception'

export default [
  {
    path: '/exception/:type',
    component: Exception
  },
  {
    path: '/',
    component: BasicLayout,
    exact: false
  }
]
