import React from 'react';
import UserOutput from './User/UserOutput';

const users = (props) => props.users.map((user, index) => {
        return <UserOutput 
        userName={user.name}
        click={() => props.clicked(index)}
        key={user.id} />
      });

export default users;