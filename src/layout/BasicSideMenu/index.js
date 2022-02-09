import React from 'react'
import isEmpty from 'lodash/isEmpty'

import { Link } from 'react-router-dom'
import { Menu, Layout } from 'antd'
import Logo from '../Logo'
const { Sider } = Layout
const { Item, SubMenu } = Menu

const SideMenuBasic = (props) => {
  const { sideMenus } = props
  const handleSelect = (item) => {
    console.log('item', item.key)
  }
  const renderMenuItem = (item = {}) => {
    const { meta = {}, path, routes, permission, isHiddenInMenu } = item
    // permission true 代表有权限， 没有直接返回false
    if (isHiddenInMenu || permission === false) return null

    const MenuTitle = ({ title: tempTitle, icon }) => {
      //兼容title国际化
      let title = tempTitle
      if (!icon) {
        return title
      }
      return (
        <span>
          {icon}
          <span>{title}</span>
        </span>
      )
    }

    if (!routes || !Array.isArray(routes) || isEmpty(routes)) {
      return (
        <Item key={path} onClick={handleSelect}>
          <Link to={path}>
            <MenuTitle {...meta} />
          </Link>
        </Item>
      )
    }

    if (Array.isArray(routes) && !isEmpty(routes)) {
      return (
        <SubMenu key={path} title={<MenuTitle {...meta} />}>
          {routes.map((item) => renderMenuItem(item))}
        </SubMenu>
      )
    }
  }

  return (
    <Sider trigger={null} className="sidebar-container">
      <Logo />
      <Menu mode="inline" className="">
        {sideMenus.map((item) => renderMenuItem(item))}
      </Menu>
    </Sider>
  )
}

export default SideMenuBasic
