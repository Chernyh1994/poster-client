import { success, error } from 'redux-saga-requests';
import {
  LOGIN,
  REGISTER,
  PROFILE,
  UPDATE,
  LOGOUT
} from './constants';

const initialState = {
  token: null,
  user: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case success(LOGIN):
    case success(REGISTER):
    case success(PROFILE):
    case success(UPDATE):
      const { user } = action.response.data;
      return {
        ...state,
        user
      };
    case error(LOGIN):
    case error(REGISTER):
    case error(PROFILE):
    case error(UPDATE):
      const message = action.error.message;
      return {
        ...state,
        message
      };
    case LOGOUT:
      return initialState;
    default: 
        return state;
  }
};

export default authReducer;