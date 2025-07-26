/*Create a button in a React component that, when clicked, changes the text from"Not Clicked" to "Clicked!" using event handling. */

import React, { useState } from 'react';

function Button() {
  const [text, setText] = useState('Not Clicked');

  const handleClick = () => {
    setText('Clicked!');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p>{text}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Button;

