import React, {useContext, useEffect} from 'react';
import {UserContext} from '../context/User/UserContext';

export const UserList = () => {
  const {users, getUsers} = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="list-group h-100">
      {users.map((user) => (
        <a
          className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
          href="#!"
          key={user.id}>{`${user.first_name} ${user.last_name}`}</a>
      ))}
    </div>
  );
};
