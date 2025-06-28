//Create a functional component Greeting that accepts a name as a prop and
//displays "Hello, [name]!".
// src/components/Greeting.js
import React from 'react';

function Greeting(props) {
  return (
    <h1>Hello, {props.name}!</h1>
  );
}

export default Greeting;
