/* eslint-disable no-case-declarations */
/* eslint-disable import/prefer-default-export */
import {
  POSTS,
  POSTS_SUCCESS,
  POSTS_ERROR,
  POST,
  POST_SUCCESS,
  POST_ERROR
} from '../constants';

const initialState = {
  posts: [],
  post: [],
  isLoading: false,
  nextNumbPage: null,
  lastPage: null
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS:
    case POST:
      return {
        ...state,
        isLoading: true
      };
    case POSTS_SUCCESS:
      const { posts } = action.response.data;
      return {
        ...state,
        posts: [...state.posts, ...posts.data],
        isLoading: false,
        nextNumbPage: posts.current_page + 1,
        lastPage: posts.last_page
      };
    case POST_SUCCESS:
      const { post } = action.response.data;
      return {
        ...state,
        post,
        isLoading: false
      };
    case POSTS_ERROR:
    case POST_ERROR:
      const { error } = action.error.message;
      return {
        ...state,
        error,
        isLoading: false
      };
    default: return state;
  }
};
