/*Create a list of users where each user has a unique id. Render the user list using React and assign a unique key to each */

import React from "react";

const Users_List = () => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "Alice" }
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Name: {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users_List;
