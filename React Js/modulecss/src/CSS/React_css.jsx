import React from 'react'
import './mystyle2.css';
import './mystyle1.css';


function React_css() {

 var mystyle={color: 'black', backgroundColor: 'red'}

  return (
    <div>
       <h1 style={{color: 'red', backgroundColor: 'yellow'}}>Hi i am inline css</h1>

       <hr />

       <h1 style={mystyle}>Hi i am var store css</h1>

       <hr />

       <div className='test1'>
            hello box 1
       </div>
       
       <hr />
       
       <div className='test1'>
            hello box 2
       </div>
       <div className='box1'>
            hello box 2
       </div>
       
       
    </div>
  );
}

export default React_css;