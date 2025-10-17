import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import { Edit2, Trash2 } from 'react-feather'; // ✅ Use Edit2 instead of Pencil


function Manage_categories() {
  const [packages, setPackages] = useState([]);
  const [formdata, setFormdata] = useState({
    id: "",
    cate_name: "",
    cate_image: ""
  });

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      const res = await axios.get('http://localhost:3000/categories');
      setPackages(res.data);
    } catch (error) {
      toast.error('Failed to load categories');
    }
  };

  const deletePackage = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you cannot recover this package!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          await axios.delete(`http://localhost:3000/categories/${id}`);
          toast.success('Deleted successfully');
          getdata();
        } catch (error) {
          toast.error('Delete failed!');
        }
      }
    });
  };

  const editPackage = async (id) => {
    const res = await axios.get(`http://localhost:3000/categories/${id}`);
    setFormdata(res.data);
  };

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!formdata.cate_name || !formdata.cate_image) {
      toast.error('All fields are required');
      return;
    }
    await axios.patch(`http://localhost:3000/categories/${formdata.id}`, formdata);
    swal("Success!", "Category updated successfully!", "success");
    getdata();
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h6 style={{ color: '#e83e8c' }}>| Bridal Makeup Dashboard</h6>
        <h2 className="fw-bold">Manage Properties</h2>
      </div>

      <div className="table-responsive shadow rounded-5">
        <table className="table table-hover text-center align-middle">
          <thead style={{ backgroundColor: '#f8bbd0', color: '#fff' }}>
            <tr>
              <th>ID</th>
              <th>Category Name</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {packages.length > 0 ? (
              packages.map((pkg) => (
                <tr key={pkg.id} className="align-middle">
                  <td className="fw-bold">{pkg.id}</td>
                  <td>{pkg.cate_name}</td>
                  <td>
                    <img
                      src={pkg.cate_image}
                      alt={pkg.cate_name}
                      style={{ width: '100px', borderRadius: '10px', objectFit: 'cover' }}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => deletePackage(pkg.id)}
                      className="btn btn-outline-danger btn-sm me-2 rounded-pill d-flex align-items-center"
                    >
                      <Trash2 size={16} className="me-1" /> Delete
                    </button>
                    <button
                      className="btn btn-outline-primary btn-sm rounded-pill d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#editModal"
                      onClick={() => editPackage(pkg.id)}
                    >
                      <Edit2 size={16} className="me-1" /> Edit
                    </button>

                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-muted py-4">
                  No properties found.
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
            <div className="modal-header" style={{ backgroundColor: '#e83e8c', color: '#fff' }}>
              <h5 className="modal-title">Edit Property</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitForm}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Category Name</label>
                  <input
                    type="text"
                    name="cate_name"
                    value={formdata.cate_name}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Image URL</label>
                  <input
                    type="url"
                    name="cate_image"
                    value={formdata.cate_image}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary rounded-pill px-4" data-bs-dismiss="modal">
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

export default Manage_categories;
