import { success } from 'redux-saga-requests';
import { LOGIN, REGISTER, LOGOUT } from '../store/auth/constants';

export const localStorageMiddleware = () => (next) => (action) => {
  switch (action.type) {
    case success(LOGIN):
    case success(REGISTER):
      localStorage.setItem('token', action.response.data.token);
      return next(action);
    case LOGOUT:
      localStorage.removeItem('token');
      return next(action);
    default:
      return next(action);
  }
};
