import React from 'react'
import { HomeOutlined, SettingOutlined, LoginOutlined } from '@ant-design/icons'

export const indexRoute = '/home'
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: 'home',
      icon: <HomeOutlined />
    },
    access: [],
    component: React.lazy(() => import('@/pages/Home'))
  },
  {
    path: '/about',
    name: 'about',
    redirect: '/about/channel',
    meta: {
      title: 'about',
      icon: <SettingOutlined />
    },
    access: [],
    routes: [
      {
        path: '/channel',
        name: 'channel',
        meta: {
          title: 'channel',
          icon: <LoginOutlined />
        },
        access: ['OVER_HOME'],
        component: React.lazy(() => import('@/pages/About'))
      },
      {
        path: '/channel1',
        name: 'channel1',
        meta: {
          title: 'channel1',
          icon: <LoginOutlined />
        },
        access: [],
        component: React.lazy(() => import('@/pages/About'))
      }
    ]
  }
]
