import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../features/usersSlice";
import EditUser from "./EditUser";

function UserList() {
  const { list } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      <h3>User List</h3>

      {list.map((user) => (
        <div key={user.id} style={{ marginBottom: "10px" }}>
          <b>{user.name}</b> — {user.email}

          <button
            onClick={() => {
              setEditing(true);
              setSelectedUser(user);
            }}
          >
            Edit
          </button>

          <button onClick={() => dispatch(deleteUser(user.id))}>
            Delete
          </button>
        </div>
      ))}

      {editing && (
        <EditUser user={selectedUser} setEditing={setEditing} />
      )}
    </div>
  );
}

export default UserList;
