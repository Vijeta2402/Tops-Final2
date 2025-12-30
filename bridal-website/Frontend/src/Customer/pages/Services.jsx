import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Services() {
  const [categories, setCategories] = useState([]);
  const [packages, setPackages] = useState([]);
  const [activeCate, setActiveCate] = useState(null);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    getCategories();
    getPackages();
  }, []);

  const getCategories = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/categories`
      );
      setCategories(res.data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const getPackages = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/properties`
      );
      setPackages(res.data);
    } catch (error) {
      console.error("Failed to fetch packages:", error);
    }
  };

  // 🔑 FILTER LOGIC
  const visiblePackages = activeCate
    ? packages.filter((p) => p.cate_id === activeCate)
    : packages;

  return (
    <div>
      {/* Heading */}
      <div className="page-heading header-text py-5 text-center bg-light">
        <div className="container">
          <h2 className="fw-bold" style={{ color: "#e72e77", marginTop: "90px" }}>
            Bridal Makeup Packages
          </h2>
          <p className="text-muted">
            Choose your perfect bridal makeup package
          </p>
        </div>
      </div>

      {/* Show / Close */}
      <div className="container text-center py-4">
        <button
          className="btn btn-danger rounded-pill px-4"
          onClick={() => {
            setShowButtons(!showButtons);
            setActiveCate(null); // reset filter
          }}
        >
          {showButtons ? "Close" : "Show All"}
        </button>

        {/* CATEGORY BUTTONS */}
        {showButtons && (
          <div className="mt-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`btn rounded-pill px-4 m-2 ${
                  activeCate === cat.id ? "btn-danger" : "btn-outline-danger"
                }`}
                onClick={() => setActiveCate(cat.id)}
              >
                {cat.cate_name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* PACKAGES */}
      <div className="container">
        <div className="row">
          {visiblePackages.length === 0 ? (
            <p className="text-center text-muted">No packages found</p>
          ) : (
            visiblePackages.map((pkg) => (
              <div key={pkg.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card shadow h-100 rounded-4">
                  <Link to={`/makeup-details/${pkg.id}`}>
                    <img
                      src={pkg.package_image}
                      alt={pkg.package_name}
                      className="card-img-top"
                      style={{ height: "220px", objectFit: "cover" }}
                    />
                  </Link>

                  <div className="card-body d-flex flex-column">
                    <h5 className="text-center text-danger">{pkg.package_name}</h5>

                    <p className="text-muted small text-center">{pkg.description}</p>

                    {/* Duration and Price */}
                    <p className="text-center mb-1"><strong>Duration:</strong> {pkg.duration}</p>
                    <p className="text-center mb-3"><strong>Price:</strong> ₹{pkg.price}</p>

                    <div className="mt-auto text-center">
                      <Link
                        to={`/makeup-details/${pkg.id}`}
                        className="btn btn-danger rounded-pill px-4"
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
      </div>
    </div>
  );
}

export default Services;


