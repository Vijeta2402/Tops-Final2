import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function User_Profile() {
  const redirect = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const [user, setUser] = useState({});

  const getData = async () => {
    try {
      const res = await axios.get(
     `${process.env.REACT_APP_API_URL}/api/user/${localStorage.getItem("u_id")}`);
      console.log(res.data);
      setUser(res.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div>
      {/* ===== Page Header ===== */}
      <div className="page-heading header-text bg-light text-center py-5 shadow-sm">
        <div className="container">
          <h3 className="fw-bold text-uppercase text-dark" style={{margintop: "510px"}}>
            My Bridal Profile
          </h3>
          <p className="text-muted">Manage your bridal account details below</p>
        </div>
      </div>

      {/* ===== Profile Section ===== */}
      <div className="section my-5">
        <div className="container">
          <div className="row justify-content-center">
            {/* Left Column - Profile Info */}
            <div className="col-lg-6 col-md-8">
              <div className="card border-0 shadow rounded-4 p-4">
                <h4 className="text-center text-primary mb-4">My Account</h4>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>User ID:</strong> <span>{user.id}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Full Name:</strong> <span>{user.name}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Email:</strong> <span>{user.email}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Mobile:</strong> <span>{user.mobile}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Password:</strong> <span>{user.password}</span>
                  </li>
                </ul>

                <div className="text-center mt-4">
                  <button
                    className="btn btn-pink text-white px-4 py-2 rounded-pill shadow"
                    style={{
                      backgroundColor: "#d63384",
                      border: "none",
                    }}
                    onClick={() => redirect("/edit_profile/" + user.id)}
                  >
                    ✏️ Edit Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="col-lg-5 col-md-8 mt-5 mt-lg-0">
              <div className="text-center">
                <img
                  src={
                    user.profile_image
                      ? user.profile_image
                      : "https://sp.yimg.com/ib/th/id/OIP.tKjRyGX_COe3J4R62ThGIAHaE8?pid=Api&w=148&h=148&c=7&dpr=2&rs=1"
                  }
                  alt="User"
                  className="img-fluid rounded-circle shadow"
                  style={{
                    width: "250px",
                    height: "250px",
                    objectFit: "cover",
                    border: "5px solid #d63384",
                  }}
                />
                <h5 className="mt-3 text-dark">
                  Welcome, {user.name || "Beautiful Bride"} 💕
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User_Profile;
