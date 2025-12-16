import React, { useState } from "react";
import AFooter from "../component/AFooter";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { House, People, Calendar3, Images, Gear, BoxArrowRight } from "react-bootstrap-icons";
import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";

function AdminLayout({ children }) {

    const redirect = useNavigate();
const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const adminlogout = () => {
        localStorage.removeItem('a_id');
        localStorage.removeItem('a_name');
        localStorage.removeItem('a_email');
        swal("Good job!", "Admin Logout Success!", "success");
        redirect('/admin-login');
    }

  return (
    <div className="d-flex flex-column ">
      <div className="d-flex flex-grow-1">

        {/* Sidebar */}
        <aside
          className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`}
          style={{
            width: "250px",
            backgroundColor: "#e72e77",
            color: "white",
            minHeight: "100vh",
            padding: "20px",
          }}
        >
          <h3 className="text-center text-dark fw-bold mb-4">Bridal Admin</h3>
          <ul className="navbar-nav ml-auto flex-column">
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link" style={({ isActive }) => ({
                color: isActive ? "#e72e77" : "white",
                backgroundColor: isActive ? "white" : "transparent",
                borderRadius: "5px",
                padding: "8px 12px",
                marginBottom: "5px",
                display: "block",
                textDecoration: "none",
              })}
              >Dashboard</NavLink>
            </li>

            <li className="dropdown nav-item">
              <a className="dropdown-toggle nav-link" data-toggle="dropdown" href="#">
                categories
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item nav-link" to="/add_categories" style={{ color: "#e72e77" }}>
                  Add Categories
                </Link>
                <Link className="dropdown-item nav-link" to="/manage_categories" style={{ color: "#e72e77" }}>
                  Manage Categories
                </Link>
              </div>
            </li>

            <li className="dropdown nav-item">
              <a className="dropdown-toggle nav-link" data-toggle="dropdown" href="#">
                Properties
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item nav-link" to="/add_properties" style={{ color: "#e72e77" }}>
                  Add Properties
                </Link>
                <Link className="dropdown-item nav-link" to="/manage_properties" style={{ color: "#e72e77" }}>
                  Manage Properties
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <NavLink to="/manage_customer" className="nav-link">Customer</NavLink>
            </li>

            <li className="dropdown nav-item"> 
              <a className="dropdown-toggle nav-link" data-toggle="dropdown" href="#">
                Booking
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item nav-link" to="/manage_booking" style={{ color: "#e72e77" }}>
                  Booking Report
                </Link>
                <Link className="dropdown-item nav-link" to="/manage_feedback" style={{ color: "#e72e77" }}>
                  Feedback
                </Link>
              </div>
            </li>

            
          <li className="nav-item"><a href={void(0)} onClick={adminlogout} className="w-100 h-50 p-1" style={ ({
                color: "#e72e77" ,
                backgroundColor:  "white" ,
                borderRadius: "5px",
                padding: "8px 12px",
                marginBottom: "5px",
                display: "block",
                textDecoration: "none",
              })}> Logout</a></li>    
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-grow-1">
          <nav className="navbar navbar-light bg-white border-bottom px-4">
            <div className="container-fluid">
              <span className="navbar-brand mb-0 h5">Dashboard</span>
              <button
                className="btn btn-sm btn-outline-secondary d-md-none"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              > ☰
              </button>
              <span className="text-muted">Welcome, Admin</span>
            </div>
          </nav>

          {/* Page Content */}
          <div className="p-4 flex-grow-1">{children}</div>
        </main>
      </div>
      {/* Footer always at bottom */}
      <AFooter />
    </div >
  );
}

export default AdminLayout;

