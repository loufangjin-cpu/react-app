import React from 'react'
import './index.less'
import logoImg from '../../assets/images/image-header.png'

export default function Logo(props) {
  return (
    <div className="logo" onClick={() => window.location.reload()}>
      <img className="img-logo" src={logoImg} alt="logo" />
    </div>
  )
}
