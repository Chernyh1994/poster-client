import { success, error } from 'redux-saga-requests';
import {
  CREATE_POST,
  POSTS,
  POST,
  MY_POSTS
} from './constants';
import { addAllIds, addByIds } from '../../utils/normalizingStore';

const initialState = {
  byId: {},
  allIds: [],
  myIds: [],
  post: null,
  isLoading: false
};

const postReducer = (state = initialState, action) => {
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
      return initialState;
    case success(POSTS):
      const posts = action.response.data.posts;
      return {
        ...state,

        byId: {...state.byId, ...addByIds(posts.data)},
        allIds: [...state.allIds, ...addAllIds(posts.data)],
        myIds: [...state.myIds],

        isLoading: false,
        nextNumbPage: posts.current_page + 1,
        lastPage: posts.last_page
      };
    case success(MY_POSTS):
      const myPosts = action.response.data.posts;
      return {
        ...state,

        byId: {...state.byId, ...addByIds(myPosts.data)},
        allIds: [...state.allIds],
        myIds: [...state.myIds, ...addAllIds(myPosts.data)],

        isLoading: false,
        nextNumbPage: myPosts.current_page + 1,
        lastPage: myPosts.last_page
      };
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
    default:
       return state;
  }
};

export default postReducer;
