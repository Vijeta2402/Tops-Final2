/*Use the useEffect() hook to fetch and display data from an API when the component mounts. */

import React, { useState, useEffect } from "react";

function UseEffect() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when component mounts
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // Empty dependency array → runs only on mount

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (<li key={user.id}> <b>{user.name}</b> — {user.email}</li>))  }
      </ul>
    </div>
  );
}

export default UseEffect;
