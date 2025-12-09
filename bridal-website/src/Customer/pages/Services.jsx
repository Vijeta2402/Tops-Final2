import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Services() {
  const [categories, setCategories] = useState([]);
  const [packages, setPackages] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    getCategories();
    getPackages();
  }, []);

  // Fetch categories (e.g., Bridal, Reception, Mehndi)
  const getCategories = async () => {
    try {
      const res = await axios.get("http://localhost:3000/categories");
      setCategories(res.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  // Fetch makeup packages
  const getPackages = async () => {
    try {
      const res = await axios.get("http://localhost:3000/properties"); // using same JSON
      setPackages(res.data);
    } catch (err) {
      console.error("Error fetching packages:", err);
    }
  };

  // Filter packages by category
  const filteredPackages =
    filter === "All"
      ? packages
      : packages.filter((pkg) => pkg.cate_id === filter);

  return (
    <div>
      {/* Page Heading */}
      <div className="page-heading header-text py-5 text-center bg-light">
        <div className="container">
          <h2 className="fw-bold" style={{ color: "#e72e77", marginTop: "90px" }}>
            Bridal Makeup Packages
          </h2>
          <p className="text-muted mb-0">
            Choose your perfect bridal makeup package from our exclusive range
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container py-4 text-center">
        <ul className="nav justify-content-center flex-wrap mb-4">
          <li className="nav-item m-2">
            <button
              className={`btn rounded-pill px-4 ${
                filter === "All" ? "btn-danger text-white" : "btn-outline-danger"
              }`}
              onClick={() => setFilter("All")}
            >
              Show All
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.id} className="nav-item m-2">
              <button
                className={`btn rounded-pill px-4 ${
                  filter === cat.id ? "btn-danger text-white" : "btn-outline-danger"
                }`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.cate_name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Packages Grid */}
      <div className="container">
        <div className="row">
          {filteredPackages.length === 0 ? (
            <div className="text-center py-5 w-100">
              <h5 className="text-muted">No packages found in this category.</h5>
            </div>
          ) : (
            filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="col-lg-4 col-md-6 align-self-center mb-4"
              >
                <div className="card border-0 shadow-lg rounded-4 w-100 h-100 d-flex flex-column">
                  <Link to={`/makeup-details/${pkg.id}`}>
                    <img
                      src={pkg.package_image}
                      alt={pkg.package_name}
                      className="card-img-top rounded-top-4"
                      style={{ height: "220px", objectFit: "cover" }}
                    />
                  </Link>
                  <div className="card-body d-flex flex-column">
                    <h5
                      className="fw-bold text-center"
                      style={{ color: "#e72e77" }}
                    >
                      {pkg.package_name}
                    </h5>
                    <p className="text-muted small text-center mb-2">
                      {pkg.description?.slice(0, 70) || "No description available."}
                      {pkg.description ? "..." : ""}
                    </p>
                    <ul className="list-unstyled small mb-3 text-secondary">
                      {pkg.duration && (
                        <li>
                          <i className="bi bi-clock me-2 text-danger"></i>
                          Duration: {pkg.duration}
                        </li>
                      )}
                      <li>
                        <i className="bi bi-currency-rupee me-2 text-danger"></i>
                        Price: {pkg.price}
                      </li>
                    </ul>
                    <div className="mt-auto text-center">
                      <Link
                        to={`/makeup-details/${pkg.id}`}
                        className="btn btn-sm rounded-pill px-4"
                        style={{ backgroundColor: "#e72e77", color: "#fff" }}
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Optional Pagination */}
        <div className="d-flex justify-content-center mt-4">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link text-danger" href="#!">1</a>
            </li>
            <li className="page-item active">
              <a className="page-link bg-danger border-0">2</a>
            </li>
            <li className="page-item">
              <a className="page-link text-danger" href="#!">3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
