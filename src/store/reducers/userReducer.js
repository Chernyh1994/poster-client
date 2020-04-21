/* eslint-disable no-case-declarations */
import {
  USER_PROFILE_SUCCESS,
  USER_PROFILE_ERROR
} from '../constants';

const initialState = {
  userProfile: null,
  error: null
};

// eslint-disable-next-line import/prefer-default-export
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_SUCCESS:
      const { user } = action.response.data;
      return {
        ...state,
        userProfile: user
      };
    case USER_PROFILE_ERROR:
      const { error } = action.error.message;
      return {
        ...state,
        error
      };
    default: return state;
  }
};
