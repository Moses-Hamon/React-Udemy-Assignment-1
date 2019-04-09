import React, { Component } from 'react';

class UserInput extends Component {

    render() {
        return (
            <div>
                <label>Please Enter Username: </label>
                <input type='text' onChange={this.props.changeUser}/>
            </div>
        );
    }
}

export default UserInput;   
