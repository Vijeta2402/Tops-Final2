{/*In React class components, lifecycle methods are special methods that get called at specific points in a component’s life. These allow you to run code at particular times, like when a component is created, updated, or destroyed.

The Lifecycle Phases of a React Class Component A React class component goes through three main lifecycle phases: 

1. Mounting Phase
This happens when the component is being inserted into the DOM for the first time.

Lifecycle methods involved:

constructor(): Initializes state and binds methods. 

static getDerivedStateFromProps(): Rarely used, called right before render(), both during mount and update.  

render(): Returns JSX to render UI. 

componentDidMount(): Invoked after the component is mounted. Ideal for AJAX calls, subscriptions, etc.

2. Updating Phase
This occurs when the component’s state or props change.  

Lifecycle methods involved:

static getDerivedStateFromProps(): Called before every re-render.   

shouldComponentUpdate(): Lets you decide if a re-render is needed (for performance optimization).    

render(): Re-renders the component.

getSnapshotBeforeUpdate(): Called right before the DOM is updated; its return value is passed to componentDidUpdate().

componentDidUpdate(prevProps, prevState, snapshot): Called after the update is done. Useful for responding to prop/state changes.

3. Unmounting Phase
When the component is being removed from the DOM.

Lifecycle method involved:

componentWillUnmount(): Used to clean up (e.g., cancel timers, unsubscribe from services).*/}
import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch users');
        return response.json();
      })
      .then(data => this.setState({ users: data, loading: false }))
      .catch(error => this.setState({ error, loading: false }));
  }

  render() {
    const { users, loading, error } = this.state;

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
      <div>
        <h2>User List</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
