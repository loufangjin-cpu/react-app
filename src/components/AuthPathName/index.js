import React from 'react'
import isFunction from 'lodash/isFunction'

const Auth = ({ item, ...otherProps }) => {
  return isFunction(item.render) ? (
    item.render({ ...otherProps, route: item })
  ) : (
    <item.component {...otherProps} {...item} />
  )
}

export default Auth
