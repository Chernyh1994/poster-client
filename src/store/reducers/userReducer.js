import { success, error } from 'redux-saga-requests';
import {
  USER_PROFILE
} from '../constants/userConstants';

const initialState = {
  userProfile: null,
  error: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case success(USER_PROFILE):
      const user = action.response.data.user;
      return {
        ...state,
        userProfile: { ...state.userProfile, ...user }
      };
    case error(USER_PROFILE):
      const message = action.error.message;
      return {
        ...state,
        message
      };
    default: return state;
  }
};
