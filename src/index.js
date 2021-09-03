import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { demoRouter } from './demoRouter'
import { createRoutes } from './router'
import rootRoutes from './router/routeConfig'

import './index.less'
import App from './App'
console.log(createRoutes(rootRoutes))
// import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  // <Router>{demoRouter()}</Router>,
  <Router>{createRoutes(rootRoutes)}</Router>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
