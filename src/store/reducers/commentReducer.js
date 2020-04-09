/* eslint-disable no-case-declarations */
/* eslint-disable import/prefer-default-export */
import {
  GET_COMMENT,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_ERROR,
  GET_SUBCOMMENT_SUCCESS,
  GET_SUBCOMMENT_ERROR
} from '../constants';

const initialState = {
  commentList: [],
  subCommentList: [],
  isLoading: false,
  hasMore: true
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT:
      return {
        ...state,
        isLoading: true
      };
    case GET_COMMENT_SUCCESS:
      const { comment, hasMore } = action.response.data;
      return {
        ...state,
        commentList: [...state.commentList, ...comment],
        isLoading: false,
        hasMore
      };
    case GET_COMMENT_ERROR:
    case GET_SUBCOMMENT_ERROR:
      const { error } = action.error.message;
      return {
        ...state,
        error,
        isLoading: false
      };
    case GET_SUBCOMMENT_SUCCESS:
      const { SubComment } = action.response.data;
      return {
        ...state,
        commentList: [...state.subCommentList, ...SubComment],
        isLoading: false
      };
    default: return state;
  }
};
