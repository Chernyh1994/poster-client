import {  
  LOGIN_USER, 
  REGISTER_USER,
  LOGOUT 
} from '../constants';

export const loginUser = (user) => ({
  type: LOGIN_USER,
  request:
    { 
      url: `/api/sanctum/token`, 
      method: 'post',
      data: user,
    },
})

export const registerUser = (user) => ({
  type: REGISTER_USER,
  request: 
    { 
      url: `/api/sanctum/register`, 
      method: 'post',
      data: user,
    },
})

export const logout = () => ({
  type: LOGOUT,
})
