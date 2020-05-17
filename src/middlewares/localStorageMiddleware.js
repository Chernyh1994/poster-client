import { success } from 'redux-saga-requests';
import { LOGIN_USER, REGISTER_USER, LOGOUT } from '../store/constants/authConstants';

export const localStorageMiddleware = () => (next) => (action) => {
  switch (action.type) {
    case success(LOGIN_USER):
    case success(REGISTER_USER):
      localStorage.setItem('token', action.response.data.token);
      return next(action);
    case LOGOUT:
      localStorage.removeItem('token');
      return next(action);
    default:
      return next(action);
  }
};
