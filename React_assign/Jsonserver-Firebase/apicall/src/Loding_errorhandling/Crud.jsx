//Implement error handling and loading states for the API call. Display a loading spinner while the data is being fetched.
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Crud() {
  const API = "http://localhost:5000/users";    

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Fetch Users from API
  const loadUsers = async () => {
    try {
      setLoading(true); // show spinner
      setError(""); // reset previous error

      const response = await axios.get(API);
      setUsers(response.data); // store data in state
    } catch (err) {
      setError("Failed to fetch data. Check your server connection!");
      console.error(err);
    } finally {
      setLoading(false); // hide spinner
    }
  };

  // ✅ Fetch data once on component load
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Users List</h2>

      {/* ✅ Loading Spinner */}
      {loading && (
        <div className="text-center">
          <div className="spinner-border" role="status"></div>
          <p className="mt-2">Loading...</p>
        </div>
      )}

      {/* ✅ Error Message */}
      {error && (
        <div className="alert alert-danger text-center">
          {error}
        </div>
      )}

      {/* ✅ Show data table only when not loading & no error */}
      {!loading && !error && users.length > 0 && (
        <table className="table table-bordered table-hover mt-3">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {users.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* ✅ No Data Case */}
      {!loading && !error && users.length === 0 && (
        <p className="text-center mt-3">No users found.</p>
      )}
    </div>
  );
}

export default Crud;
