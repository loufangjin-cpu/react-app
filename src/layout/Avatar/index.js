import React, { useState } from 'react'
import { Menu, Dropdown, Avatar } from 'antd'
import {
  LogoutOutlined,
  CaretDownOutlined,
  PhoneOutlined
} from '@ant-design/icons'
import './index.less'
import avatar from '../../assets/images/image-header.png'
const userName = '娄兄'
const userId = '111111111'

const AvatarLayout = () => {
  const [visible, setVisible] = useState(false)
  const modalConfig = {
    visible,
    onCancel: () => setVisible(false),
    onSuccess: () => setVisible(false)
  }
  const logout = () => {
    console.log('退出')
  }
  const menu = (
    <Menu>
      <Menu.Item>
        <span onClick={logout}>退出登录</span>
      </Menu.Item>
    </Menu>
  )
  return (
    <div className="header-box">
      <div className=""></div>
      <Dropdown
        overlay={menu}
        placement="bottomRight"
        trigger={['click']}
        overlayClassName="dropdown_outLogin"
      >
        <div className="avatar">
          <Avatar src={avatar} shape="circle" />
          <span className="user_wrap-list">
            <span className="userName">
              <span>{userName || '用户名'}</span>
              <CaretDownOutlined />
            </span>
            <span className="id">ID:{userId}</span>
          </span>
        </div>
      </Dropdown>
    </div>
  )
}
export default AvatarLayout
