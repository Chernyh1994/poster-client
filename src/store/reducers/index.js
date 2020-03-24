import { combineReducers } from 'redux';
import registerUser from './registerUser';

export const rootReduser = combineReducers({
  users: registerUser
});
