import {types} from '../types';

export const UserReducer = (state, action) => {
  const {payload, type} = action;

  switch (type) {
    case types.getUsers:
      return {
        ...state,
        users: payload,
      };

    case types.getProfile:
      return {
        ...state,
        selectedUser: payload,
      };

    default:
      return state;
  }
};
