import React from 'react';

export const HOCFactory = (Component) => {
  class HOC extends React.Component {
    render () {
      return <Component  {...this.props} />
    }
  }
  return HOC
}