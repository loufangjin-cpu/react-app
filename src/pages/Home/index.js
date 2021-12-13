import React, {useState, useContext, useReducer} from 'react'
import {GlobalContext} from './componets/context'
import { myReducer } from './componets/reducer';
import ChildList from './componets/childList';
import ChildB from './componets/childB';
const Home = () => {
  const [stateCount, setStateCount] = useState(0);
  const init = {name: 'hello'}
  const [state, dispatch] = useReducer(myReducer, init)
  const handleCountClick = () => {
    // setStateCount((stateCount) => ++stateCount)
    // setStateCount((stateCount) => ++stateCount)
    // setStateCount((stateCount) => ++stateCount)
    // setStateCount((stateCount) => ++stateCount)
  }
  const handleClick = (e) => {
    e.preventDefault() // 阻止默认行为
    e.stopPropagation() // 阻止冒泡
    console.log('组合事件', e.SyntheticBaseEvent)
    console.log('target', e.target) // 触发的目标事件元素
    console.log('currentTarget', e.currentTarget) // 绑定事件的当前元素

    //! 注意 组合事件和原生事件
    // 原生事件
    console.log('nativeEvent', e.nativeEvent)
    console.log('nativeEvent-target', e.nativeEvent.target)
    console.log('nativeEvent-curTarget', e.nativeEvent.currentTarget) // 输出
    // react
    // ● 非原生事件- 组合事件
    // ● 所有事件都挂在到document上 - 和 DOM事件不一样
    // vue
    // ● 原生event
    // ● 事件被挂载到当前元素 - 和 DOM事件一样
  }
  return <>
    <a href='https://www.baidu.com' onClick={handleClick}>点击验证react的组合事件和vue的区别</a>
    <div>
      验证合并: {stateCount}
      <button onClick={handleCountClick}>点击</button>
    </div>

    <GlobalContext.Provider value={[state, dispatch]}>
      <ChildList />
      <ChildB />
    </GlobalContext.Provider>
  </>
}

export default Home
