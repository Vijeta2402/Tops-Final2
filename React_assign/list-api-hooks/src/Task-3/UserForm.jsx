/*Create a form with inputs for name, email, and password. Use state to control the form and display the form data when the user submits it.*/

import React, { Component } from "react";
import "./CompleteForm.css"; // We'll create CSS for the pink style

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      submittedUsers: []
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation
    if (!this.state.name || !this.state.email || !this.state.password) {
      alert("Please fill all fields");
      return;
    }
    if (this.state.password !== this.state.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Save user to table
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    this.setState((prevState) => ({
      submittedUsers: [...prevState.submittedUsers, newUser],
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    }));
  };

  render() {
    const { name, email, password, confirmPassword, submittedUsers } = this.state;

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

export default UserForm;