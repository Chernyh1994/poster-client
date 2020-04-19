/* eslint-disable camelcase */
/* eslint-disable no-case-declarations */
/* eslint-disable import/prefer-default-export */
import {
  SUB_COMMENTS,
  SUB_COMMENTS_SUCCESS,
  SUB_COMMENTS_ERROR,
  COMMENTS,
  COMMENTS_SUCCESS,
  COMMENTS_ERROR
} from '../constants';

const initialState = {
  comment: null,
  comments: [],
  subComments: [],
  isLoading: false,
  nextNumbPage: null,
  lastPage: null
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUB_COMMENTS:
    case COMMENTS:
      return {
        ...state,
        isLoading: true
      };
    case SUB_COMMENTS_SUCCESS:
      const { sub_comments } = action.response.data;
      return {
        ...state,
        subComments: sub_comments,
        isLoading: false
      };
    case COMMENTS_SUCCESS:
      const { comments } = action.response.data;
      return {
        ...state,
        comments: [...comments.data],
        isLoading: false,
        nextNumbPage: comments.current_page + 1,
        lastPage: comments.last_page
      };
    case SUB_COMMENTS_ERROR:
    case COMMENTS_ERROR:
      const { error } = action.error.message;
      return {
        ...state,
        error,
        isLoading: false
      };
    default: return state;
  }
};
