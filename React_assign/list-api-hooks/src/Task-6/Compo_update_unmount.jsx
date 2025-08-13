/*Implement a component that logs a message to the console when it updates using componentDidUpdate(). Log another message when the component unmounts
using componentWillUnmount().*/

import React, { Component } from "react";

class Compo_update_unmount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // Runs after every update (state or props change)
  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated!");
    console.log("Previous state:", prevState);
    console.log("Current state:", this.state);
  }

  // Runs just before component is removed from the DOM
  componentWillUnmount() {
    console.log("Component will unmount!");
  }

  // Function to update state
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increase</button>
      </div>
    );
  }
}

export default Compo_update_unmount;

