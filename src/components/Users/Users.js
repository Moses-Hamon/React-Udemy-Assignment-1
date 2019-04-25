import React, {Component} from 'react';
import UserOutput from './User/UserOutput';

class Users extends Component {
  render() {
    let users = this.props.users.map((user, index) => {
      return <UserOutput
        userName={user.name}
        click={() => this.props.clicked(index)}
        key={user.id} />
    });


    return (
      <div>
        {users}
      </div>
    )
  }
}

/* const users = (props) => props.users.map((user, index) => {
        return <UserOutput 
        userName={user.name}
        click={() => props.clicked(index)}
        key={user.id} />
      });
*/
export default Users;