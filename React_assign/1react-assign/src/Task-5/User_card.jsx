//• Create a React component UserCard that accepts name, age, and location as props and displays them in a card format.
import React from 'react';

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '12px',
  padding: '66px',
  maxWidth: '300px',
  /*margin: '20px auto',*/
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f9f9f9',
};


const User_card = ({ name, age, location }) => {
  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};

export default User_card;
