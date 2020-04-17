/* eslint-disable camelcase */
/* eslint-disable no-case-declarations */
/* eslint-disable import/prefer-default-export */
import {
  POSTS,
  POSTS_SUCCESS,
  POSTS_ERROR,
  POST,
  POST_SUCCESS,
  POST_ERROR,
  USER_POSTS,
  USER_POSTS_SUCCESS,
  USER_POSTS_ERROR
} from '../constants';

const initialState = {
  posts: [],
  post: null,
  userPosts: [],
  isLoading: false,
  nextNumbPage: null,
  lastPage: null
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS:
    case POST:
    case USER_POSTS:
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
    case USER_POSTS_SUCCESS:
      const { user_posts } = action.response.data;
      return {
        ...state,
        userPosts: user_posts,
        isLoading: false
      };
    case POSTS_ERROR:
    case POST_ERROR:
    case USER_POSTS_ERROR:
      const { error } = action.error.message;
      return {
        ...state,
        error,
        isLoading: false
      };
    default: return state;
  }
};
