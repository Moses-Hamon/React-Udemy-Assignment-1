import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    users: [
      {name: 'Thomas', age: 30},
      {name:'Moses', age: 32},
      {name: 'Naph', age: 28},
      {name: 'Lauren', age:30 }
    ]
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
      userName={this.state.users.name}/>
      
      {/*Used to display all users in arr*/}
        {this.state.users.map(user => {
          return <UserOutput userName={user.name} />
        })}
      </div>
    );
  }

 

}

export default App;
