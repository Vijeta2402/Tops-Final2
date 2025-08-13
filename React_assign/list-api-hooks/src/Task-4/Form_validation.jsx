
import React, { Component } from "react";
import "./Form_validation.css";

class Form_validation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {},
      submittedUsers: []
    };
  }

  validateForm = () => {
    const { name, email, password, confirmPassword } = this.state;
    let errors = {};
    let isValid = true;

    // Name validation
    if (!name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }

    // Password validation
    const numericPattern = /^[0-9]+$/;
    if (!password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (!numericPattern.test(password)) {
      errors.password = "Password must contain numbers only";
      isValid = false;
    } else if (password.length < 4) {
      errors.password = "Password must be at least 4 digits";
      isValid = false;
    }

    // Confirm password validation
    if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validateForm()) {
      const { name, email, password } = this.state;
      const newUser = { name, email, password };

      this.setState((prevState) => ({
        submittedUsers: [...prevState.submittedUsers, newUser],
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        errors: {}
      }));
    }
  };

  render() {
    const { name, email, password, confirmPassword, errors, submittedUsers } = this.state;

    return (
      <div className="form-container">
        <h2 className="form-title">React Contact Form with Full Validation</h2>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <small className="error">{errors.name}</small>}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Enter numeric password"
            />
            {errors.password && <small className="error">{errors.password}</small>}
          </div>

          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              placeholder="Re-enter password"
            />
            {errors.confirmPassword && <small className="error">{errors.confirmPassword}</small>}
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>

        <h3 className="table-title">User Manage</h3>
        <table border="1" style={{ marginTop: '20px', width: '100%' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
         <tbody>
            {submittedUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Form_validation;
