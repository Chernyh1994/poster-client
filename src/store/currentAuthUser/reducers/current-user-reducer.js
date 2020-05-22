import { success, error } from 'redux-saga-requests';

import { CURRENT_USER_POSTS } from '../../post/constants';
import { keyAllIds } from '../../../utils/normalizingStore';

const initialState = {
  postIds: [],
  likeIds: []
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case success(CURRENT_USER_POSTS):
      const currentUserPosts = action.response.data.posts;
      return {
        ...state,
        postsIds: [...state.postsIds, ...keyAllIds(currentUserPosts)]
      };
    case error(CURRENT_USER_POSTS):
      const errorMessage = action.error.message;
      return {
        ...state,
        errorMessage
      };
    default:
      return state;
  }
};

export default currentUserReducer;
