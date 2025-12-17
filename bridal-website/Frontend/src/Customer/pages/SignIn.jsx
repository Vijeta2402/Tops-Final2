import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import swal from "sweetalert";

function SignIn() {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const changeHandel = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  // Validation
  const validate = () => {
    if (!formdata.email) {
      toast.error("Email is required");
      return false;
    }
    if (!formdata.password) {
      toast.error("Password is required");
      return false;
    }
    return true;
  };

  // Submit login
  const submitHandel = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/user?email=${formdata.email}&password=${formdata.password}`);
        if (res.data.length > 0) {
          // Save user ID in localStorage
          localStorage.setItem("u_id", res.data[0].id);
          swal("Welcome!", "Login Successful 💕", "success");
          navigate("/user_profile");
        } else {
          toast.error("Invalid Email or Password");
        }
      } catch (error) {
        console.error(error);
        toast.error("Login failed. Please try again!");
      }
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div className="page-heading header-text bg-light text-center py-5 shadow-sm">
        <div className="container">
          <h3 className="fw-bold text-uppercase text-dark"  style={{ marginTop: "50px" }}>Bridal Login</h3>
          <p className="text-muted">Access your bridal account</p>
        </div>
      </div>

      {/* Login Form */}
      <div className="section my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <div className="card shadow rounded-4 p-4">
                <h4 className="text-center text-primary mb-4">Login to Your Account</h4>

                <form onSubmit={submitHandel}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter your email..."
                      value={formdata.email}
                      onChange={changeHandel}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter your password..."
                      value={formdata.password}
                      onChange={changeHandel}
                    />
                  </div>

                  <div className="text-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-pink text-white px-4 py-2 rounded-pill shadow"
                      style={{ backgroundColor: "#d63384", border: "none" }}
                    >
                      💖 Login
                    </button>
                  </div>

                  <p className="mt-3 text-center text-muted">
                    Don't have an account?{" "}
                    <span
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/signup")}
                    >
                      Register here
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

