import {
    LOGIN,
    REGISTER,
    PROFILE,
    UPDATE,
    LOGOUT
  } from './constants';
  
  export const loginUser = (email, password) => ({
    type: LOGIN,
    request: {
      url: '/api/V1/login',
      method: 'post',
      data: { email, password }
    }
  });
  
  export const registerUser = (name, email, password) => ({
    type: REGISTER,
    request: {
      url: '/api/V1/register',
      method: 'post',
      data: { name, email, password }
    }
  });
  
  export const profileUser = () => ({
    type: PROFILE,
    request: {
      url: '/api/V1/user',
      method: 'get'
    }
  });
  
  export const updateUser = (formData) => ({
    type: UPDATE,
    request: {
      url: '/api/V1/user',
      method: 'post',
      data: formData
    },
    meta: {
      asPromise: true
    }
  });
  
  export const logoutUser = () => ({
    type: LOGOUT
  });
  