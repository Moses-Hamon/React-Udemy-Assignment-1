import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    user: 'Thomas'
  }
  
  changeUserHandler = (event) => {
      this.setState({
        user: event.target.value
      });
    
    console.log(event.target.value);
    // console.log('User has entered somthing to the input field');
  }

  render() {
    return (
      <div className="App">
      <UserInput changeUser={this.changeUserHandler}/>
        <UserOutput userName='Moses'/>
        <UserOutput userName={this.state.user}/>
        <UserOutput />
      </div>
    );
  }

 

}

export default App;
