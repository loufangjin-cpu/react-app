import React, { useState, useEffect } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import SideMenu from '../BasicSideMenu'
import { urlToList } from '@/utils/util.url';

import {
  createRoutes,
  pageRoutes,
  headerSideMenu,
  getSideMenus,
  authorityKeys as roles,
  combineRoutePermissions
} from '@/router'
import CustomHeader from '../Header'
import settting from '@/config/setting'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
const { navTheme, multipleMenu, fixedHeader, hideBreadcrumb } = settting

const BasicLayout = (props) => {
  const {location} = props
  const [collapsed, setcollapsed] = useState(false)
  const [authorityKeys, setAuthorityKeys] = useState()

  useEffect(async() => {
    //  请求权限接口获取权限数组
    // const authorityKeys = await getAuthority(roles);
    const authorityKeysInit = ['OVER_HOME1']
    setAuthorityKeys(authorityKeysInit)
  }, []);
  const onCollapse = (collapsed) => {
    console.log(collapsed)
    setcollapsed(collapsed)
  }
  const sideMenus = () => {
    // 获取所有路由
    const sideMenuList = getSideMenus()
    // 使用authorityKeys数组权限码
    // sideMenuList循环路由，匹配每一项又一个码对上就返回 permission:true
    const sideMenusPermis = combineRoutePermissions(sideMenuList, authorityKeys)
    return sideMenusPermis
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu sideMenus={sideMenus()} />
      <Content className="main-container">
        <CustomHeader fixedHeader={fixedHeader} />
        <Content className="app-main">{createRoutes(pageRoutes)}</Content>
        <Footer />
      </Content>
    </Layout>
  )
}

export default BasicLayout
