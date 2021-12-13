/* 根路由 */

import BasicLayout from '@/layout'
import Exception from '@/components/Exception'

// eslint-disable-next-line import/no-anonymous-default-export
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
