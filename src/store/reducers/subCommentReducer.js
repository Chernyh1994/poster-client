/* eslint-disable no-case-declarations */
/* eslint-disable import/prefer-default-export */
import {
  GET_SUB_COMMENT,
  GET_SUB_COMMENT_SUCCESS,
  GET_SUB_COMMENT_ERROR
} from '../constants';

const initialState = {
  subCommentList: [],
  isLoading: false,
  hasMore: true
};

export const subCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUB_COMMENT:
      return {
        ...state,
        isLoading: true
      };
    case GET_SUB_COMMENT_SUCCESS:
      const { subComment, hasMore } = action.response.data;
      return {
        ...state,
        subCommentList: subComment,
        isLoading: false,
        hasMore
      };
    case GET_SUB_COMMENT_ERROR:
      const { error } = action.error.message;
      return {
        ...state,
        error,
        isLoading: false
      };
    default: return state;
  }
};
