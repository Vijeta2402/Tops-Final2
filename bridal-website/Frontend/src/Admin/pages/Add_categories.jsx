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

    const changeHandel = (e) => {
        setFormdata({ ...formdata, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formdata);
    }

    function validation() {
            let ans = true;
            if (formdata.cate_name == "") {
                toast.error('Category Name Field is required');
                ans = false;
            }    
            if (formdata.cate_image == "") {
                toast.error('Category Image URL Field is required');
                ans = false;
            }
           
            return ans;
        }
    const submitHandel = async (e) => {
        e.preventDefault();
        if(validation())
        {
          const res = await axios.post(`/api/categories`, formdata);
            swal("Good job!", "Category added Success!", "success");
            setFormdata({ ...formdata, cate_name: "", cate_image: ""});
      }
    }

  return (
    <div className="container py-5">
      {/* Page Heading */}
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
          {/* Card */}
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
             <form method="post" onSubmit={submitHandel}>
                {/* Category Name */}
                <div className="form-floating mb-4">
                  <input  type="text" onChange={changeHandel} value={formdata.cate_name} className="form-control"  placeholder="Enter Categories Name" name="cate_name" />
                 <label htmlFor="email">Categories Name</label>
                </div>

                {/* Category Image */}
                <div className="form-floating mb-4">
                  <input
                    type="url"
                    onChange={changeHandel}
                    value={formdata.cate_image}
                    className="form-control rounded-3"
                    placeholder="Enter Category Image URL"
                    name="cate_image"
                  />
                 <label htmlFor="pwd">Categories URL</label>
                </div>

                {/* Preview Image */}
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

                {/* Submit Button */}
                <button type="submit"
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

