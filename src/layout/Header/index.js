import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar'
import Logo from '../Logo'

const Header = () => {
  return (
    <div className="navbar">
      {/* <div className="navbar-logo">
        <Logo />
      </div> */}
      <div className="navbar-link">
        <span className="flex">
          {/* <I18n className="I18n" /> */}
          <div className="right-menu">
            <Avatar />
          </div>
        </span>
      </div>
    </div>
  )
}

export default Header
