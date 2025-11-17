import React from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Redux Toolkit CRUD App</h1>
      <AddUser />
      <hr />
      <UserList />
    </div>
  );
}

export default App;
