import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Makeup_details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [makeup, setMakeup] = useState(null);

  const [customerName, setCustomerName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentDay, setAppointmentDay] = useState("");

  useEffect(() => {
    getMakeupDetails();
  }, []);

  const getMakeupDetails = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/properties/${id}`);
      setMakeup(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load makeup details");
    }
  };

  const handleBookAppointment = async (e) => {
    e.preventDefault();

    // 🔐 Login check
    const userId = localStorage.getItem("u_id");
    if (!userId) {
      toast.warning("Please login to book an appointment");
      navigate("/Sign-In");
      return;
    }

    // ❗ Form validation
    if (!customerName || !appointmentDate || !appointmentDay) {
      toast.error("All fields are required!");
      return; // ⛔ STOP here, page stays
    }

    const bookingData = {
      id: Date.now(),
      user_id: userId,
      customer_name: customerName,
      package_id: makeup.id,
      service: makeup.package_name,
      price: makeup.price,
      appointment_date: appointmentDate,
      appointment_day: appointmentDay,
      status: "Pending",
    };

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/Bookings`, bookingData);
      toast.success("Appointment booked successfully!");
      navigate("/services"); // ✅ only on success
    } catch (err) {
      console.error(err);
      toast.error("Error while booking appointment");
    }
  };

  if (!makeup) return <p className="text-center mt-5">Loading details...</p>;

  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow p-4">
        <div className="row align-items-center">
          <div className="col-md-5">
            <img src={makeup.package_image} alt={makeup.package_name} className="img-fluid rounded" />
          </div>
          <div className="col-md-7">
            <h3>{makeup.package_name}</h3>
            <p>{makeup.description}</p>
            <p><b>Duration:</b> {makeup.duration}</p>
            <h5>Price: ₹{makeup.price}</h5>

            <form className="mt-3" onSubmit={handleBookAppointment}>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <input
                  type="date"
                  className="form-control"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Day (e.g. Monday)"
                  value={appointmentDay}
                  onChange={(e) => setAppointmentDay(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-danger w-100">
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Makeup_details;

