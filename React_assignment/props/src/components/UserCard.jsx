//Create a React component UserCard that accepts name, age, and location as props and displays them in a card format. import React from 'react';


import React from 'react';

const UserCard = ({ name, age, location }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '12px',
      padding: '16px',
      width: '200px',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
    }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default UserCard;
