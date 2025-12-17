import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import swal from "sweetalert";

function SignUp() {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirm_password: "",
    profile_image: "",
  });

  // Handle input change
  const changeHandel = (e) => {
    const { name, value, files } = e.target;
    if (name === "profile_image" && files.length > 0) {
      // Convert image to base64
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onloadend = () => {
        setFormdata({ ...formdata, profile_image: reader.result });
      };
    } else {
      setFormdata({ ...formdata, [name]: value });
    }
  };

  // Validation
  const validate = () => {
    if (!formdata.name) {
      toast.error("Name is required");
      return false;
    }
    if (!formdata.email) {
      toast.error("Email is required");
      return false;
    }
    if (!formdata.mobile) {
      toast.error("Mobile is required");
      return false;
    }
    if (!formdata.password) {
      toast.error("Password is required");
      return false;
    }
    if (formdata.password !== formdata.confirm_password) {
      toast.error("Passwords do not match");
      return false;
    }
    return true;
  };

  // Submit registration
  const submitHandel = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        // Check if user already exists
       const existing = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/user?email=${formdata.email}`);
        if (existing.data.length > 0) {
          toast.error("Email already registered");
          return;
        }

        // Register new user
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/user`, formdata);
        swal("Welcome!", "Registration Successful 💕", "success");
        navigate("/Sign-In");
      } catch (error) {
        console.error(error);
        toast.error("Registration failed. Try again!");
      }
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div className="page-heading header-text bg-light text-center py-5 shadow-sm">
        <div className="container">
          <h3 className="fw-bold text-uppercase text-dark">Bridal Sign Up</h3>
          <p className="text-muted">Create your bridal account</p>
        </div>
      </div>

      {/* Sign Up Form */}
      <div className="section my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="card shadow rounded-4 p-4">
                <h4 className="text-center text-primary mb-4">Create Account</h4>

                <form onSubmit={submitHandel}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Your Name..."
                      value={formdata.name}
                      onChange={changeHandel}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Your Email..."
                      value={formdata.email}
                      onChange={changeHandel}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">
                      Mobile
                    </label>
                    <input
                      type="number"
                      name="mobile"
                      id="mobile"
                      className="form-control"
                      placeholder="Mobile Number..."
                      value={formdata.mobile}
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
                      placeholder="Enter Password..."
                      value={formdata.password}
                      onChange={changeHandel}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="confirm_password" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirm_password"
                      id="confirm_password"
                      className="form-control"
                      placeholder="Confirm Password..."
                      value={formdata.confirm_password}
                      onChange={changeHandel}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="profile_image" className="form-label">
                      Profile Image (optional)
                    </label>
                    <input
                      type="file"
                      name="profile_image"
                      id="profile_image"
                      className="form-control"
                      accept="image/*"
                      onChange={changeHandel}
                    />
                    {formdata.profile_image && (
                      <img
                        src={formdata.profile_image}
                        alt="Profile Preview"
                        className="mt-2 rounded-circle shadow"
                        style={{ width: "120px", height: "120px", objectFit: "cover" }}
                      />
                    )}
                  </div>

                  <div className="text-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-pink text-white px-4 py-2 rounded-pill shadow"
                      style={{ backgroundColor: "#d63384", border: "none" }}
                    >
                      💖 Sign Up
                    </button>
                  </div>

                  <p className="mt-3 text-center text-muted">
                    Already have an account?{" "}
                    <span
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/Sign-In")}
                    >
                      Login here
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

export default SignUp;

