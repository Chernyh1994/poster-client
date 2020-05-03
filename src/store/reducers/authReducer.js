import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  USER_SUCCESS,
  USER_ERROR,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_ERROR,
  LOGOUT
} from '../constants/authConstants';

const initialState = {
  token: null,
  user: null,
  error: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
    case REGISTER_USER_SUCCESS:
    case USER_SUCCESS:
    case USER_UPDATE_SUCCESS:
      const { token, user } = action.response.data;
      return {
        ...state,
        token,
        user
      };
    case LOGIN_USER_ERROR:
    case REGISTER_USER_ERROR:
    case USER_ERROR:
    case USER_UPDATE_ERROR:
      const { error } = action.error.message;
      return {
        ...state,
        error
      };
    case LOGOUT:
      return initialState;
    default: return state;
  }
};
