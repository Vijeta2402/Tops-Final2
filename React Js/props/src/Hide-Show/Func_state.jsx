import React from 'react'
import  { useState } from 'react'

import Func_img from './Func_img'

function Func_state() {
    const [data, setData] = useState({ isImage: true});

  return (
    <div>
      {
        data.isImage ? <Func_img /> : null 
      }
       <button onClick={() =>setData({...data, isImage: !data.isImage })}>Hide/Show</button>
      
    </div> 
  )
}

export default Func_state
