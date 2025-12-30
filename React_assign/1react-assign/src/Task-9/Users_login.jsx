/*Create a component that conditionally displays a login or logout button based on the user’s login status.*/

import React from 'react'
import { useState } from 'react';
function Users_login() {
  // Step 1: useState to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Step 2: Conditional logic using if statement (outside JSX)
  let message;
  if (isLoggedIn) {
    message = <h2>Welcome back!</h2>;
  } else {
    message = <h2>Please log in to continue.</h2>;
  }

  // Step 3: Toggle function
  const toggleChange = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={{ padding: '20px' }}>
      
      {message}

   
      <button onClick={toggleChange} className='align-middle' style={{ padding: '10px 20px', textAlign:'center', backgroundColor: isLoggedIn ? 'red' : 'green', color: 'white', border: 'none', borderRadius: '5px' }}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}



 

export default Users_login 
