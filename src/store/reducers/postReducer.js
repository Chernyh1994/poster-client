import { success, error } from 'redux-saga-requests';
import {
  CREATE_POST,
  POSTS,
  POST,
  MY_POSTS
} from '../constants/postConstants';
import { addAllIds, addByIds } from '../../utils/normalizingStore';

const initialState = {
  posts: {
    byId: {},
    allIds: [],
    myIds: []
  },
  post: null,
  isLoading: false
};

const normalizedPosts = (state, action) => {
  const { posts } = action.response.data;
  return {
    ...state,
    posts: {
      byId: { ...state.posts.byId, ...addByIds(posts) },
      allIds: [...state.posts.allIds, ...addAllIds(posts)],
      myIds: [],
      nextNumbPage: posts.current_page + 1,
      lastPage: posts.last_page
    },
    isLoading: false
  };
};

const normalizedUserPosts = (state, action) => {
  const { posts } = action.response.data;
  return {
    ...state,
    posts: {
      byId: { ...state.posts.byId, ...addByIds(posts) },
      allIds: [],
      myIds: [...state.posts.myIds, ...addAllIds(posts)],
      nextNumbPage: posts.current_page + 1,
      lastPage: posts.last_page
    },
    isLoading: false
  };
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
    case POSTS:
    case POST:
    case MY_POSTS:
      return {
        ...state,
        isLoading: true
      };
    case success(CREATE_POST):
      return {
        ...state,
        posts: {
          byId: {},
          allIds: [],
          myIds: []
        },
        isLoading: false
      };
    case success(POSTS):
      return normalizedPosts(state, action);
    case success(MY_POSTS):
      return normalizedUserPosts(state, action);
    case success(POST):
      const { post } = action.response.data;
      return {
        ...state,
        post,
        isLoading: false
      };
    case error(CREATE_POST):
    case error(POSTS):
    case error(POST):
    case error(MY_POSTS):
      const message = action.error.message;
      return {
        ...state,
        message,
        isLoading: false
      };
    default: return state;
  }
};
