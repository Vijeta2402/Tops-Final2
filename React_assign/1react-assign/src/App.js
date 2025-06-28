import React from 'react';
import Hello from './Task-1/Hello';
import Jsx_example from './Task-3/Jsx_example';
import Greeting from './Task-4/Greeting';
import WelcomeMessage from './Task-2/WelcomeMessage';
import Usercard_row from './Task-5/Usercard_row';
import Counter from './Task-6/Counter';
function App() {
  return (
    <div>
      <Hello /> 
      <hr></hr>
      <br></br>
      <Jsx_example />
      <hr></hr>
      <br></br>
      <WelcomeMessage />
      <hr></hr>
      <br></br>
      <Greeting name="Vijeta" />
      <hr></hr>
      <br></br>
       <h1 style={{ textAlign: 'center', marginTop: '20px' }}>User Cards</h1>
      <Usercard_row />
      <br></br>
      <hr></hr>
      <br></br>
      <Counter/>
      <hr></hr>
      <br></br>
    </div>
  )
}
export default App;
