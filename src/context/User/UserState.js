import {useReducer} from 'react';
import {UserContext} from './UserContext';
import {UserReducer} from './UserReducer';
import {types} from '../types';
import axios from 'axios';

export const UserState = (props) => {
  const initialState = {
    user: [],
    selectedUser: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUsers = async () => {
    const response = await axios.get('https://reqres.in/api/users');
    dispatch({
      type: types.getUsers,
      payload: response.data.data,
    });
  };

  const getProfile = async (id) => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    dispatch({
      type: types.getProfile,
      payload: response.data.data,
    });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};
