import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import swal from "sweetalert";

function Manage_properties() {
  const [packages, setPackages] = useState([]);
  const [formdata, setFormdata] = useState({
    id: "",
    cate_id: "",
    package_name: "",
    price: "",
    duration: "",
    description: "",
    package_image: ""
  });

  useEffect(() => {
    getData();
  }, []);

  // Fetch all bridal makeup packages
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/properties");
      setPackages(res.data);
    } catch (error) {
      toast.error("Failed to load packages");
    }
  };

  // Delete a package
  const deleteData = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this package!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          await axios.delete(`http://localhost:3000/properties/${id}`);
          toast.success("Package deleted successfully");
          getData();
        } catch (error) {
          toast.error("Delete failed!");
        }
      }
    });
  };

  // Handle form input change
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  // Open modal with selected row’s data
  const editData = (pkg) => {
    setFormdata(pkg);
    // open modal manually (Bootstrap)
    const modal = new window.bootstrap.Modal(document.getElementById("editModal"));
    modal.show();
  };

  // Submit updated package
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/properties/${formdata.id}`, formdata);
      toast.success("Package updated successfully!");
      getData();
    } catch (error) {
      toast.error("Update failed!");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="mb-4 text-center">
            <h6 className="fw-bold text-uppercase" style={{ color: "#d63384" }}>
              | Bridal Makeup
            </h6>
            <h2 style={{ fontWeight: "600", color: "#444" }}>
              Manage Makeup Packages
            </h2>
          </div>

          {/* Table */}
          <div className="table-responsive shadow rounded-4">
            <table className="table align-middle text-center">
              <thead style={{ background: "#d63384", color: "white" }}>
                <tr>
                  <th>ID</th>
                  <th>Category ID</th>
                  <th>Package Name</th>
                  <th>Price</th>
                  <th>Duration</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {packages.length > 0 ? (
                  packages.map((pkg) => (
                    <tr key={pkg.id}>
                      <td className="fw-bold">{pkg.id}</td>
                      <td>{pkg.cate_id}</td>
                      <td className="fw-semibold">{pkg.package_name}</td>
                      <td>
                        <span className="badge rounded-pill bg-light text-dark px-3 py-2">
                          ₹{pkg.price}
                        </span>
                      </td>
                      <td>{pkg.duration}</td>
                      <td style={{ maxWidth: "200px" }}>
                        <small className="text-muted">{pkg.description}</small>
                      </td>
                      <td>
                        <img
                          src={pkg.package_image}
                          alt={pkg.package_name}
                          style={{
                            width: "100px",
                            height: "70px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                      </td>
                      <td>
                        <button
                          onClick={() => deleteData(pkg.id)}
                          className="btn btn-outline-danger btn-sm me-2 rounded-pill px-3"
                        >
                          <i className="bi bi-trash"></i> Delete
                        </button>
                        <button
                          onClick={() => editData(pkg)}
                          className="btn btn-outline-primary btn-sm rounded-pill px-3"
                        >
                          <i className="bi bi-pencil-square"></i> Edit
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center text-muted py-4">
                      No makeup packages found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Edit Modal */}
          <div className="modal fade" id="editModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content rounded-4">
                <div className="modal-header" style={{ backgroundColor: "#e83e8c", color: "#fff" }}>
                  <h5 className="modal-title">Edit Makeup Package</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={submitForm}>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Category ID</label>
                      <input
                        type="text"
                        name="cate_id"
                        value={formdata.cate_id || ""}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">Package Name</label>
                      <input
                        type="text"
                        name="package_name"
                        value={formdata.package_name || ""}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">Price</label>
                      <input
                        type="number"
                        name="price"
                        value={formdata.price || ""}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">Duration</label>
                      <input
                        type="text"
                        name="duration"
                        value={formdata.duration || ""}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">Description</label>
                      <textarea
                        name="description"
                        value={formdata.description || ""}
                        onChange={handleChange}
                        className="form-control"
                        rows="3"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">Image URL</label>
                      <input
                        type="url"
                        name="package_image"
                        value={formdata.package_image || ""}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary rounded-pill px-4">
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Manage_properties;
