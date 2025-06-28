import React from 'react';
import UserList from './component/UserList'; // no need to write .jsx
import Counter from './component/class';

function App() {
  return (
    <div className="App">
      {/*<UserList/>*/}
      <h1>React Lifecycle Demo</h1>
      <Counter />
    </div>
  );
}

export default App;

