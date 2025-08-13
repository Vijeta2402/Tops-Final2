/*Create a class component that fetches data from an API when the component mounts using componentDidMount(). Display the data in the component.*/


import React, { Component } from "react";

class ComponentDidMount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],    // To store fetched data
      loading: true // To track loading state
    };
  }

  // Fetch API data after component mounts
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        this.setState({
          users: data,
          loading: false
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { users, loading } = this.state;

    if (loading) {
      return <p>Loading data...</p>;
    }

    return (
      <div>
        <h2>User List</h2>
        <ul>
          {users.map(user => <li key={user.id}><strong>{user.name}</strong>{user.email}</li>)}
        </ul>
      </div>
    );
  }
}

export default ComponentDidMount ;
