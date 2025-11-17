import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/usersSlice";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!name || !email) return;
    dispatch(addUser({ id: Date.now(), name, email }));
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h3>Add User</h3>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddUser;
