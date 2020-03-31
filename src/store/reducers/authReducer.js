import {  
  LOGIN_USER_SUCCESS, 
  LOGIN_USER_ERROR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGOUT, 
} from '../constants';

const initialState = {
    token: null,
    error: null,
  };
  
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        token: action.response.data.token,
      };
    case LOGIN_USER_ERROR:
    case REGISTER_USER_ERROR:
      return {
        ...state,
        error: action.error.message,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
      };
    default: return state;
  }
};
  
