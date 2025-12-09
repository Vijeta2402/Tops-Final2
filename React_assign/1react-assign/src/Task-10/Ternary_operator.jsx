/*Implement a component that displays a message like "You are eligible to vote" if the user is over 18, otherwise display "You are not eligible to vote." */
 import React, { useState } from 'react';
function Ternary_operator() {
   const [age, setAge] = useState('');

    const handleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <div  style={{ padding: '20px' }}>
      <h2>Check Voting Eligibility</h2>
      <input type="number" placeholder="Enter your age" value={age} onChange={handleChange} 
      style={{ width: '400px',  padding: '8px', fontSize: '16px', display: 'block'}} />

      <p>
        {age && (age >= 18 ? '✅ You are eligible to vote.' : '❌ You are not eligible to vote.')}
      </p>
    </div>   
  )
}

export default Ternary_operator  
