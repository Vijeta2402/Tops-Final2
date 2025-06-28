import React from 'react';
import User_card from './User_card';

const Usercard_row = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
      <User_card name="Alice" age={28} location="New York" />
      <User_card name="Bob" age={35} location="London" />
      <User_card name="Charlie" age={30} location="Paris" />
      <User_card name="Diana" age={25} location="Berlin" />
    </div>
  );
};

export default Usercard_row;
