import { success, error } from 'redux-saga-requests';
import {
  CREATE_POST,
  POSTS,
  CURRENT_USER_POSTS
} from './constants';
import { keyAllIds, keyByIds } from '../../utils/normalizingStore';

const initialState = {
  byId: {},
  allIds: [],
  isLoading: false,
  hasMore: false
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
    case POSTS:
    case CURRENT_USER_POSTS:
      return {
        ...state,
        isLoading: true
      };
    case success(CREATE_POST):
      const newPost = action.response.data.post;
      return {
        ...state,
        byId: { ...state.byId, ...keyByIds([newPost]) },
        allIds: [newPost.id, ...state.allIds],
        isLoading: false
      };
    case success(POSTS):
      const posts = action.response.data.posts;
      const hasMore = action.response.data.has_more;
      return {
        ...state,
        byId: { ...state.byId, ...keyByIds(posts) },
        allIds: [...state.allIds, ...keyAllIds(posts)],
        isLoading: false,
        hasMore: hasMore
      };
    case success(CURRENT_USER_POSTS):
      const currentUserPosts = action.response.data.posts;
      const UserhasMore = action.response.data.has_more;
      return {
        ...state,
        byId: { ...state.byId, ...keyByIds(currentUserPosts) },
        isLoading: false,
        hasMore: UserhasMore
      };
    case error(CREATE_POST):
    case error(POSTS):
    case error(CURRENT_USER_POSTS):
      const errorMessage = action.error.message;
      return {
        ...state,
        errorMessage,
        isLoading: false
      };
    default:
      return state;
  }
};

export default postReducer;
