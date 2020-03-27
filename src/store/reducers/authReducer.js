import {  
  LOGIN_USER_SUCCESS, 
  LOGIN_USER_ERROR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGOUT_SUCCESS, 
} from '../constants';

const initialState = {
    token: null,
    error: null,
    userName: null,
    isAuthenticat: false,
  };
  
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
    case REGISTER_USER_SUCCESS:
      window.localStorage.setItem('token', action.response.data.token);
      return {
        ...state,
        token: action.response.data.token,
        userName: action.response.data.name,
        isAuthenticat: true,
      };
    case LOGIN_USER_ERROR:
    case REGISTER_USER_ERROR:
    case LOGOUT_SUCCESS:
      window.localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        userName: null,
        isAuthenticat: false,
        error: action.error.message,
      };
    default: return state;
  }
};
  
