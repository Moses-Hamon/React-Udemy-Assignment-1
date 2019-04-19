import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import ValidationComponent from './User/ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    users: [
      {id: 'gdfeag', name: 'Thomas', age: 30},
      {id: 'fasf', name:'Moses', age: 32},
      {id: 'fasdf', name: 'Naph', age: 28},
      {id: 'fvas', name: 'Lauren', age:30 }
    ],
    inputLength: 0,
    singleChars: []
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

  countInputLength = (event) => {
    let length = event.target.value;
    this.setState({
      inputLength: length.length 
    })
  }

  addCharHandler = (char) => {
    let tempArr = [];
    console.log(char.target.value);
    //Split the array into single chars
    tempArr = char.target.value.split('');
    console.log(tempArr);
    // Add each char to the new array if tempArr is not null
    this.setState({
      singleChars: tempArr
      });
  }

  inputHandler = (event) => {
    this.countInputLength(event);
    this.addCharHandler(event);
  }


  render() {

    let users = (
      <div>
        {/*Used to display all users in arr*/}
          {this.state.users.map((user, index) => {
            return <UserOutput 
            userName={user.name}
            click={() => this.deleteUserHandler(index)}
            key={user.id} />
          })}
      </div>
    )

    let singleChars = (
        this.state.singleChars.map((char, index) => {
          return <CharComponent char={char} key={index}/>
        })
    )

    return (
      <div className="App">
        <input type="text" onChange={(event) => this.inputHandler(event)} />
        <p>Input Length: {this.state.inputLength}</p>
        <ValidationComponent inputLength={this.state.inputLength} />
        {/*Renders Characters on Screen*/}
        {singleChars}

        <UserInput 
        changeUser={this.changeUserHandler} 
        userName={this.state.users.name} />
       {users} 
      </div>
    );
  }

 

}

export default App;
