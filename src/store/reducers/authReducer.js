import { success, error } from 'redux-saga-requests';
import {
  LOGIN_USER,
  REGISTER_USER,
  USER,
  USER_UPDATE,
  LOGOUT
} from '../constants/authConstants';

const initialState = {
  token: null,
  user: null,
  error: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case success(LOGIN_USER):
    case success(REGISTER_USER):
    case success(USER):
    case success(USER_UPDATE):
      const { user } = action.response.data;
      return {
        ...state,
        user
      };
    case error(LOGIN_USER):
    case error(REGISTER_USER):
    case error(USER):
    case error(USER_UPDATE):
      const message = action.error.message;
      return {
        ...state,
        message
      };
    case LOGOUT:
      return initialState;
    default: return state;
  }
};
