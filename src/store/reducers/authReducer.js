import {  
  LOGIN_USER_SUCCESS, 
  LOGIN_USER_ERROR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR, 
} from '../constants';

const initialState = {
    token: null,
    error: null,
  };
  
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER_SUCCESS:
        window.localStorage.setItem('token', action.response.data.token)
        return {...state, token: action.response.data.token};
      case LOGIN_USER_ERROR:
        return {...state, error: action.error.message };
      case REGISTER_USER_SUCCESS:
        window.localStorage.setItem('token', action.response.data.token)
        return {...state, token: action.response.data.token};
      case REGISTER_USER_ERROR:
        return {...state, error: action.error.message };
      default: return state;
    }
  };
  
