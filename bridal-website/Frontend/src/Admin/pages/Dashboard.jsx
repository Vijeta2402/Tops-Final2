import React, { useState } from "react";


function Dashboard() {



  return (

    <div>

      <div className="d-flex vh-100 ">
        {/* Sidebar */}


        {/* Main content */}
        <main className="flex-grow-1">
          {/* Top Navbar */}

          
          {/* Content Area */}
          <div className="container-fluid p-4">
            <div className="row">
              {/* Card 1 */}
              <div className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Total Customers</h5>
                    <p className="card-text fs-4 fw-bold">120</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Bookings</h5>
                    <p className="card-text fs-4 fw-bold">85</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Photo Uploads</h5>
                    <p className="card-text fs-4 fw-bold">240</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Bookings Table */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Recent Bookings</h5>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Date</th>
                      <th>Service</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Priya Sharma</td>
                      <td>15 Sep 2025</td>
                      <td>Bridal Makeup</td>
                      <td><span className="badge bg-success">Confirmed</span></td>
                    </tr>
                    <tr>
                      <td>Anjali Verma</td>
                      <td>18 Sep 2025</td>
                      <td>Engagement Look</td>
                      <td><span className="badge bg-warning text-dark">Pending</span></td>
                    </tr>
                    <tr>
                      <td>Neha Gupta</td>
                      <td>20 Sep 2025</td>
                      <td>Reception Look</td>
                      <td><span className="badge bg-danger">Cancelled</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

