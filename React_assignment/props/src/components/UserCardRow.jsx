import React from 'react';
import UserCard from './UserCard';

const UserCardRow = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
      <UserCard name="Alice" age={28} location="New York" />
      <UserCard name="Bob" age={35} location="London" />
    </div>
  );
};

export default UserCardRow;
