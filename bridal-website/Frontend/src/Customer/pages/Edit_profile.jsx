import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";

function Edit_profile() {
  const redirect = useNavigate();
  const { id } = useParams();

  const [formdata, setFormdata] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    profile_image: "",
  });

  // Fetch user data on component mount
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
     const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/${id}`);
      setFormdata(res.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("Failed to load profile data!");
    }
  };

  // Handle form field changes
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
  function validation() {
    let ans = true;
    if (formdata.name === "") {
      toast.error("Name Field is required");
      ans = false;
    }
    if (formdata.email === "") {
      toast.error("Email Field is required");
      ans = false;
    }
    if (formdata.mobile === "") {
      toast.error("Mobile Field is required");
      ans = false;
    }
    return ans;
  }

  // Submit updated data
  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      try {
        await axios.patch(`${process.env.REACT_APP_API_URL}/api/user/${id}`, formdata);

        swal("Success!", "Profile updated successfully!", "success");
        redirect("/user_profile");
      } catch (error) {
        console.error("Update error:", error);
        toast.error("Failed to update profile!");
      }
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div className="page-heading header-text bg-light text-center py-5 shadow-sm">
        <div className="container">
          <h3 className="fw-bold text-uppercase text-dark mt-40px">Edit Profile</h3>
          <p className="text-muted">Update your bridal account information</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="section my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="card shadow rounded-4 p-4">
                <h4 className="text-center text-primary mb-4">Update Profile</h4>

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
                      value={formdata.name}
                      onChange={changeHandel}
                      placeholder="Your Name..."
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
                      value={formdata.email}
                      onChange={changeHandel}
                      placeholder="Your E-mail..."
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
                      value={formdata.mobile}
                      onChange={changeHandel}
                      placeholder="Mobile Number..."
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="profile_image" className="form-label">
                      Profile Image
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
                      💖 Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit_profile;
