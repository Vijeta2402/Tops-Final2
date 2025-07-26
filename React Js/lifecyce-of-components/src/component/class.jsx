import React, { Component } from 'react';

// InnerCounter handles logging on update and unmount
class InnerCounter extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.count !== this.props.count) {
      console.log('InnerCounter updated. Current count:', this.props.count);
    }
  }

  componentWillUnmount() {
    console.log('InnerCounter is about to unmount.');
  }

  render() {
    return (
      <div>
        <h2>Count: {this.props.count}</h2>
        <button onClick={this.props.increment}>Increment</button>
      </div>
    );
  } 
}

// Outer component handles showing/hiding the counter 
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      show: true
    };
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>
          {this.state.show ? 'Hide' : 'Show'} Counter
        </button>

        {this.state.show && (
          <InnerCounter count={this.state.count} increment={this.increment} />
        )}
      </div>
    );
  }
}

export default Counter;
