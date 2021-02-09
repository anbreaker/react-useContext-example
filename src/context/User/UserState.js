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
    try {
      const res = await axios.get('https://reqres.in/api/users');
      const data = res.data.data;
      dispatch({
        type: types.getUsers,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getProfile = async (id) => {
    try {
      const res = await axios.get(`https://reqres.in/api/users/${id}`);
      const {data} = res;
      dispatch({
        type: types.getProfile,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
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
