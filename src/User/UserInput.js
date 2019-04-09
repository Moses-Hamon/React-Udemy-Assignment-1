import React, { Component } from 'react';
import './UserInput.css';

class UserInput extends Component {

    render() {
        return (
            <div className='UserInput'>
                <label>Please Enter Username: </label>
                <input type='text' onChange={this.props.changeUser} value={this.props.userName}/>
            </div>
        );
    }
}

export default UserInput;   
