import React from 'react';
import './UserInput.css';

const UserInput = () => {
        return (
            <div className='UserInput'>
                <label>Please Enter Username: </label>
                <input type='text' onChange={this.props.changeUser} value={this.props.userName}/>
            </div>
        );
}

export default UserInput;   
