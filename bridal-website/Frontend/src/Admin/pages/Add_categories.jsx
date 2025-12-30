import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Add_categories() {

  const [formdata, setFormdata] = useState({
    id: "",
    cate_name: "",
    cate_image: ""
  });

  // ✅ ONLY update field value
  const changeHandel = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };

  function validation() {
    let ans = true;

    if (!formdata.cate_name.trim()) {
      toast.error("Category Name is required");
      ans = false;
    }

    if (!formdata.cate_image.trim()) {
      toast.error("Category Image URL is required");
      ans = false;
    }

    return ans;
  }

  const submitHandel = async (e) => {
    e.preventDefault();

    if (validation()) {
      const payload = {
        ...formdata,
        id: new Date().getTime().toString() // ✅ generate ID here ONLY
      };

      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/categories`,
        payload
      );

      swal("Good job!", "Category added successfully!", "success");

      setFormdata({
        id: "",
        cate_name: "",
        cate_image: ""
      });
    }
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold" style={{ color: "#e72e77" }}>
          <i className="bi bi-tags-fill me-2"></i> Add New Category
        </h2>
        <p className="text-muted">
          Create and manage categories for bridal services and products.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <form onSubmit={submitHandel}>
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    name="cate_name"
                    value={formdata.cate_name}
                    onChange={changeHandel}
                    className="form-control"
                    placeholder="Category Name"
                  />
                  <label>Category Name</label>
                </div>

                <div className="form-floating mb-4">
                  <input
                    type="url"
                    name="cate_image"
                    value={formdata.cate_image}
                    onChange={changeHandel}
                    className="form-control"
                    placeholder="Image URL"
                  />
                  <label>Category Image URL</label>
                </div>

                {formdata.cate_image && (
                  <div className="text-center mb-4">
                    <img
                      src={formdata.cate_image}
                      alt="Preview"
                      className="img-thumbnail shadow-sm"
                      style={{ maxHeight: "200px" }}
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-100 rounded-pill py-2"
                  style={{
                    backgroundColor: "#e72e77",
                    border: "none",
                    color: "#fff",
                    fontWeight: "600"
                  }}
                >
                  <i className="bi bi-check-circle me-2"></i> Save Category
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_categories;

