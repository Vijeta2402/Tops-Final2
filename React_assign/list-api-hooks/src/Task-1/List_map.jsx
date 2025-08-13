import React from 'react';

function List_map() {
  const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li> // 👈 Always use a unique key
        ))}
      </ul>
    </div>
  );
}

export default List_map;
