import {
  LOGIN_USER,
  REGISTER_USER,
  USER,
  LOGOUT
} from '../constants';

export const loginUser = (email, password) => ({
  type: LOGIN_USER,
  request:
    {
      url: '/api/V1/login',
      method: 'post',
      data: email,
      password
    }
});

export const registerUser = (name, email, password) => ({
  type: REGISTER_USER,
  request:
    {
      url: '/api/V1/register',
      method: 'post',
      data: name,
      email,
      password
    }
});

export const getUser = () => ({
  type: USER,
  request:
    {
      url: '/api/V1/user',
      method: 'get'
    }
});

export const logout = () => ({
  type: LOGOUT
});
