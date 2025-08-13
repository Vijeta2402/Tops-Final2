/*Create a functional component with a counter using the useState() hook. Include buttons to increment and decrement the counter  */

import React, { useState } from "react";

function UseState() {
  // Declare state variable "count" and set initial value to 0
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter App</h2>
      <h3>{count}</h3>
      <button onClick={increment} style={{ marginRight: "10px" }}>
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default UseState;
