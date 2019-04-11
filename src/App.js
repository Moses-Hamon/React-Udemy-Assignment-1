import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    users: [
      {id: 'gdfeag', name: 'Thomas', age: 30},
      {id: 'fasf', name:'Moses', age: 32},
      {id: 'fasdf', name: 'Naph', age: 28},
      {id: 'fvas', name: 'Lauren', age:30 }
    ]
  }

  deleteUserHandler = (userIndex) => {
    const users = [...this.state.users];
    users.splice(userIndex, 1);
    this.setState({users: users});
  }
  
  changeUserHandler = (event) => {
      this.setState({
        users: [
          {name: event.target.value, age: 30},
          {name:'Moses', age: 32},
          {name: 'Naph', age: 28},
          {name: 'Lauren', age:30 }
        ]
      });
    
    console.log(event.target.value);
    // console.log('User has entered somthing to the input field');
  }

  render() {

    return (
      <div className="App">
      <UserInput 
      changeUser={this.changeUserHandler} 
      userName={this.state.users.name} />
      
      
      {/*Used to display all users in arr*/}
        {this.state.users.map((user, index) => {
          return <UserOutput 
          userName={user.name}
          click={() => this.deleteUserHandler(index)}
          key={user.id} />
        })}
      </div>
    );
  }

 

}

export default App;
