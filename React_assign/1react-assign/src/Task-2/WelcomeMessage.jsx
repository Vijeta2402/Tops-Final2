//Create a class component WelcomeMessage that displays "Welcome to React!" and render() method.
import React, { Component } from 'react';

class WelcomeMessage extends Component {
  render() {
    return (
      <div>
        <h3>Welcome to React!</h3>
      </div>
    );
  }
}

export default WelcomeMessage;