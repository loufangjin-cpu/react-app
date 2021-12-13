import React, {useContext} from 'react';
import { GlobalContext } from './context';
const ChildB = () => {
  // state 不传递会报错
  const [state, dispatch]= useContext(GlobalContext)
  return (
    <div>
      <button onClick={() => dispatch({type: 'addA'})}>adda</button>
      <button onClick={() => dispatch({type: 'addB'})}>addB</button>
    </div>
  );
};

export default ChildB;