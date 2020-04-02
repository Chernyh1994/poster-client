import {  
  LOGIN_USER, 
  REGISTER_USER,
  LOGOUT 
} from '../constants';

export const loginUser = (email, password) => ({
  type: LOGIN_USER,
  request:
    { 
      url: process.env.REACT_APP_LOGIN_USER, 
      method: 'post',
      data: email, password,
    },
})

export const registerUser = (name, email, password) => ({
  type: REGISTER_USER,
  request: 
    { 
      url: process.env.REACT_APP_REGISTER_USER, 
      method: 'post',
      data: name, email, password,
    },
})

export const logout = () => ({
  type: LOGOUT,
})
