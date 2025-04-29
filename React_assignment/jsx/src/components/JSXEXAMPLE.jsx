//Create a React component that renders the following JSX elements: 
//• A heading with the text "Welcome to JSX". 
//• A paragraph explaining JSX with dynamic data (use curly braces to insert variables). 


import React from "react";

function JSXEXAMPLE(){
  const name = "User";          // ✅ Define 'name'
  const message = "Welcome to React!";  // ✅ Define 'message'
    return(
      <div>
      <h1>Welcome to JSX</h1>
      <p>
        Hello, {name}! {message}
      </p>
    </div>
    )
}
export default JSXEXAMPLE