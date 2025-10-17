import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Trash2, Edit3, User } from "react-feather";

function Manage_customer() {
  const [users, setUsers] = useState([]);
  const [formdata, setFormdata] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:3000/user");
    setUsers(res.data);
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:3000/user/${id}`);
    toast.success("Customer deleted successfully 💖");
    getData();
  };

  // open edit modal and fill data
  const openEdit = (value) => {
    setFormdata(value);
    const modal = new window.bootstrap.Modal(document.getElementById("editModal"));
    modal.show();
  };

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/user/${formdata.id}`, formdata);
    toast.success("Customer details updated 💐");
    getData();
    document.querySelector(".btn-close").click();
  };

  return (
    <div className="manage-customer py-5" style={{ backgroundColor: "#fffafc" }}>
      <div className="container">
        {/* Heading Section */}
        <div className="text-center mb-5">
          <h6
            style={{
              color: "#d63384",
              letterSpacing: "2px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            | Customers
          </h6>
          <h2
            style={{
              color: "#5a0035",
              fontFamily: "Playfair Display, serif",
              fontWeight: "700",
            }}
          >
            Manage Your Valued Clients
          </h2>
          <div
            style={{
              width: "80px",
              height: "3px",
              backgroundColor: "#d63384",
              margin: "10px auto",
              borderRadius: "5px",
            }}
          ></div>
        </div>

        {/* Table Section */}
        <div
          className="table-responsive shadow-lg p-3 rounded-4"
          style={{
            backgroundColor: "white",
            border: "1px solid #f7d3e0",
          }}
        >
          <table className="table align-middle table-borderless table-hover">
            <thead
              style={{
                backgroundColor: "#ffe6f0",
                color: "#5a0035",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              <tr>
                <th>ID</th>
                <th>Profile</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center text-muted py-4">
                    No customers found 💁‍♀️
                  </td>
                </tr>
              ) : (
                users.map((value, index) => (
                  <tr
                    key={index}
                    className="align-middle"
                    style={{
                      borderBottom: "1px solid #f4c2d0",
                    }}
                  >
                    <td style={{ color: "#7a0048", fontWeight: "500" }}>
                      {value.id}
                    </td>
                    <td>
                      <div
                        className="d-flex justify-content-center align-items-center bg-light rounded-circle"
                        style={{
                          width: "45px",
                          height: "45px",
                          backgroundColor: "#fff0f6",
                          border: "1px solid #f6c4d3",
                        }}
                      >
                        <User color="#d63384" size={20} />
                      </div>
                    </td>
                    <td style={{ fontWeight: "500" }}>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.mobile}</td>
                    <td className="text-center">
                      <button
                        onClick={() => deleteData(value.id)}
                        className="btn btn-light border-0 me-2"
                        style={{
                          color: "#b8005a",
                          backgroundColor: "#fff0f6",
                          borderRadius: "10px",
                        }}
                      >
                        <Trash2 size={18} />
                      </button>
                      <button
                        className="btn btn-light border-0"
                        style={{
                          color: "#7a0048",
                          backgroundColor: "#ffe6f0",
                          borderRadius: "10px",
                        }}
                        onClick={() => openEdit(value)}
                      >
                        <Edit3 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ---------------- EDIT MODAL ---------------- */}
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4">
            <div
              className="modal-header"
              style={{ backgroundColor: "#e83e8c", color: "#fff" }}
            >
              <h5 className="modal-title">Edit Customer Details</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <form onSubmit={submitForm}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formdata.name || ""}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formdata.email || ""}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    value={formdata.mobile || ""}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill px-4"
                    style={{ backgroundColor: "#e83e8c", border: "none" }}
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage_customer;
