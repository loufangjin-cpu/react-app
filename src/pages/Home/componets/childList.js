import React, {useContext} from 'react';
import { GlobalContext } from './context';
const ChildList = () => {
  const [info] = useContext(GlobalContext)
  console.log('info', info)
  return (
    <div>
      Component!:  {info?.name}
    </div>
  );
};

export default ChildList;