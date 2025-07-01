//Create a Counter component with a button that increments a count value usingReact state. Display the current count on the screen.
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initialize count to 0

  function counter() {
    setCount(count + 1); // Increment count by 1
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter</h2>
      <p style={{ fontSize: '24px' }}>Current Count: {count}</p>
      <button onClick={counter} style={{ padding: '10px 20px', fontSize: '16px' }}>
      Increment
      </button>
    </div>
  )
};
export default Counter;
