import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import SideMenu from '../BasicSideMenu'
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

const BasicLayout = () => {
  const [collapsed, setcollapsed] = useState(false)
  const onCollapse = (collapsed) => {
    console.log(collapsed)
    setcollapsed(collapsed)
  }
  const sideMenus = () => {
    return getSideMenus()
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
