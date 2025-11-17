import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../features/usersSlice";

function EditUser({ user, setEditing }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateUser({ id: user.id, name, email }));
    setEditing(false);
  };

  return (
    <div>
      <h3>Edit User</h3>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleUpdate}>Update</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </div>
  );
}

export default EditUser;
