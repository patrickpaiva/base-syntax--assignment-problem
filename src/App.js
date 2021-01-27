import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username: 'Patrick'
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <UserInput 
          name={this.state.username} 
          changed={this.usernameChangedHandler}
        />
        <UserOutput 
          name={this.state.username} 
        />
      </div>
    );
  }
}

export default App;
