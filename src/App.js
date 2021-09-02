import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import './App.less'
import { reqSmsSend } from '@/api/customer.js'
function App() {
  useEffect(() => {
    // picture/share/other-through?percent=30&answersetid=310062872461396&bookid=230251522514958&&uid=2993078635&codetype=141
    // const data = {
    //   answersetid: 310062872461396,
    //   version: 1,
    //   bookid: 230251522514958
    // }
    // axios.post('/klian/game/breakthrough/result/get', data).then((res) => {
    //   console.log('///', res)
    // })
    reqSmsSend().then((res) => {
      console.log('res')
    })
  }, [])
  return (
    <div className="App">
      <div className="app-box">ahsahahahssa啊阿啊实打实</div>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  )
}

export default App
