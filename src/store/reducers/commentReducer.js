/* eslint-disable no-case-declarations */
/* eslint-disable import/prefer-default-export */
import {
  COMMENT,
  COMMENT_SUCCESS,
  COMMENT_ERROR
} from '../constants';

const initialState = {
  comment: null,
  isLoading: false
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT:
      return {
        ...state,
        isLoading: true
      };
    case COMMENT_SUCCESS:
      const { comment } = action.response.data;
      return {
        ...state,
        comment,
        isLoading: false
      };
    case COMMENT_ERROR:
      const { error } = action.error.message;
      return {
        ...state,
        error,
        isLoading: false
      };
    default: return state;
  }
};
