import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Profile} from './components/Profile';
import {UserList} from './components/UserList';
import {UserState} from './context/User/UserState';

export const App = () => {
  return (
    <UserState>
      <UserList />
    </UserState>
  );
};
