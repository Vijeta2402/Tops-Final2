// src/Admin/pages/Manage_Booking.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Manage_Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  // Fetch all bookings from JSON server
  const fetchBookings = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/Bookings`);
      setBookings(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching bookings:", err);
      toast.error("Failed to load bookings");
      setLoading(false);
    }
  };

  // Update booking status
  // Update booking status (handles old and new bookings)

const updateStatus = async (id, status) => {
  try {
    const bookingToUpdate = bookings.find((b) => b.id === id);
    if (!bookingToUpdate) throw new Error("Booking not found");

    // Create a full object with fallback values
    const updatedBooking = {
      id: bookingToUpdate.id,
      customer_name: bookingToUpdate.customer_name || "",
      package_id: bookingToUpdate.package_id || null,
      service: bookingToUpdate.service || "",
      price: bookingToUpdate.price || "",
      appointment_date: bookingToUpdate.appointment_date || bookingToUpdate.date || "",
      appointment_day: bookingToUpdate.appointment_day || bookingToUpdate.time || "",
      status: status,
    };

    // PUT request with full object
    await axios.put(`${process.env.REACT_APP_API_URL}/api/Bookings/${id}`, updatedBooking);
    toast.success("Status updated successfully");
    fetchBookings(); // refresh table
  } catch (err) {
    console.error("Update Status Error:", err);
    toast.error("Error updating status");
  }
};


  // Delete booking
  const deleteBooking = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;

    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/Bookings/${id}`);
      toast.success("Booking deleted successfully");
      fetchBookings(); // refresh data
    } catch (err) {
      console.error(err);
      toast.error("Error deleting booking");
    }
  };

  if (loading) {
    return <p className="text-center mt-5">Loading bookings...</p>;
  }

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4" style={{ color: "#e72e77" }}>
        Manage Customer Bookings
      </h2>

      {bookings.length === 0 ? (
        <p className="text-center text-muted">No bookings available.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Customer Name</th>
                <th>Service / Package</th>
                <th>Price</th>
                <th>Date</th>
                <th>Day</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, index) => (
                <tr key={b.id}>
                  <td>{index + 1}</td>
                  <td>{b.customer_name}</td>
                  <td>{b.service}</td>
                  <td>₹{b.price}</td>
                  <td>{b.appointment_date || b.date}</td>
                  <td>{b.appointment_day || "-"}</td>
                  <td>
                    <select
                      className={`form-select ${
                        b.status === "Pending"
                          ? "bg-warning text-dark"
                          : b.status === "Confirmed"
                          ? "bg-info text-dark"
                          : "bg-success text-white"
                      }`}
                      value={b.status}
                      onChange={(e) => updateStatus(b.id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteBooking(b.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Manage_Bookings;
