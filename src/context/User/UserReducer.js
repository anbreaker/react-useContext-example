import {types} from '../types';

export const UserReducer = (state, action) => {
  switch (action.type) {
    case types.getUsers:
      return {
        ...state,
        users: action.payload,
      };

    case types.getProfile:
      return {
        ...state,
        selectedUser: action.payload,
      };

    default:
      return state;
  }
};
