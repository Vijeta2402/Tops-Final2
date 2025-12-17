import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css';

function Admin_login() {
  const redirect = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('a_id')) {
      redirect('/dashboard');
    }
  }, [redirect]);

  const [formdata, setFormdata] = useState({
    email: "",
    password: ""
  });

  const changeHandel = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  function validation() {
    let ans = true;
    if (formdata.email === "") {
      toast.error('Email Field is required');
      ans = false;
    }
    if (formdata.password === "") {
      toast.error('Password Field is required');
      ans = false;
    }
    return ans;
  }

  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/admin?email=${formdata.email}`);

      if (res.data.length > 0) {
        if (formdata.password === res.data[0].password) {
          localStorage.setItem('a_id', res.data[0].id);
          localStorage.setItem('a_name', res.data[0].name);
          localStorage.setItem('a_email', res.data[0].email);
          swal("Welcome!", "Login Successful!", "success");
          redirect('/dashboard');
        } else {
          swal("Error", "Wrong Password!", "error");
        }
      } else {
        swal("Error", "Email does not exist!", "error");
      }
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: 'linear-gradient(135deg, #ffffff 60%, #ffe6f0 100%)',
      }}
    >
      <div
        className="card p-4 shadow-lg border-0"
        style={{
          width: '400px',
          borderRadius: '15px',
          backgroundColor: 'white',
        }}
      >
        <h3
          className="text-center mb-4"
          style={{ color: '#d63384', fontWeight: '600', letterSpacing: '1px' }}
        >
          Admin Login
        </h3>

        <form onSubmit={submitHandel}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{ color: '#d63384', fontWeight: '500' }}>
              Email Address
            </label>
            <input
              type="email"
              onChange={changeHandel}
              name="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              autoComplete="off"
              style={{ borderColor: '#d63384' }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label" style={{ color: '#d63384', fontWeight: '500' }}>
              Password
            </label>
            <input
              type="password"
              onChange={changeHandel}
              name="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              autoComplete="off"
              style={{ borderColor: '#d63384' }}
            />
          </div>

          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: '#d63384',
              color: 'white',
              fontWeight: '600',
              borderRadius: '10px',
              transition: '0.3s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#b82d6c')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#d63384')}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin_login;
