import { LOGIN_USER_SUCCESS, REGISTER_USER_SUCCESS, LOGOUT } from '../store/constants';

export const localStorageMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
        case REGISTER_USER_SUCCESS:
            localStorage.setItem('token', action.response.data.token);
            return next(action);
        case LOGOUT:
            localStorage.removeItem('token');
            return next(action);
        default: 
            return next(action);
    }
};
