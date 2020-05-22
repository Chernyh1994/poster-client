import { success, error } from 'redux-saga-requests';

import {
  LOGIN,
  REGISTER,
  PROFILE,
  UPDATE,
  LOGOUT
} from '../constants';

const initialState = {
  token: null,
  user: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case success(LOGIN):
    case success(REGISTER):
    case success(PROFILE):
    case success(UPDATE):
      const user = action.response.data.user;
      return {
        ...state,
        user
      };
    case LOGOUT:
      return initialState;
    case error(LOGIN):
    case error(REGISTER):
    case error(PROFILE):
    case error(UPDATE):
      const errorMessage = action.error.message;
      return {
        ...state,
        errorMessage
      };
    default:
      return state;
  }
};

export default authReducer;
