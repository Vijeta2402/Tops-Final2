/*Create a React app with Json-server and use Get , Post , Put , Delete & patch method on Json-server API. */

import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function UsersCRUD() {
  const API = "http://localhost:5000/users";
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [editUser, setEditUser] = useState(null); // store editing user

  // ✅ GET Users
  const loadUsers = async () => {
    const res = await axios.get(API);
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // ✅ POST (Add)
  const addUser = async () => {
    if (!name || !email) return alert("Fill all fields");
    await axios.post(API, { name, email });
    setName("");
    setEmail("");
    loadUsers();
  };

  // ✅ Open Modal (Set user to edit)
  const handleEdit = (user) => {
    setEditUser({ ...user }); // copy user data
  };

  // ✅ PUT (Update)
  const updateUser = async () => {
    await axios.put(`${API}/${editUser.id}`, editUser);
    setEditUser(null);
    loadUsers();
  };

  // ✅ DELETE
  const deleteUser = async (id) => {
    await axios.delete(`${API}/${id}`);
    loadUsers();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">CRUD JSON-Server</h2>

      {/* Add Form */}
      <div className="d-flex gap-2 mt-3">
        <input className="form-control" placeholder="Enter Name"
          value={name} onChange={(e) => setName(e.target.value)} />
        <input className="form-control" placeholder="Enter Email"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="btn btn-success" onClick={addUser}>Add</button>
      </div>

      {/* Table */}
      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr><th>ID</th><th>Name</th><th>Email</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button className="btn btn-info btn-sm me-2"
                  onClick={() => handleEdit(u)}>Edit</button>
                <button className="btn btn-danger btn-sm"
                  onClick={() => deleteUser(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Modal : Show only if editUser NOT null */}
      {editUser && (
        <div className="modal fade show d-block" style={{ background: "#00000080" }}>
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Edit User</h5>
                <button className="btn-close" onClick={() => setEditUser(null)}></button>
              </div>

              <div className="modal-body">
                <input className="form-control mb-2"
                  value={editUser.name}
                  onChange={(e) => setEditUser({ ...editUser, name: e.target.value })} />

                <input className="form-control"
                  value={editUser.email}
                  onChange={(e) => setEditUser({ ...editUser, email: e.target.value })} />
              </div>

              <div className="modal-footer">
                <button className="btn btn-primary" onClick={updateUser}>Update</button>
                <button className="btn btn-secondary" onClick={() => setEditUser(null)}>Cancel</button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default UsersCRUD;
