import { combineReducers } from 'redux';
import { handleRequests } from 'redux-saga-requests';

import { authReducer } from './authReducer';
import { postReducer } from './postReducer';
import { commentReducer } from './commentReducer';
import { subCommentReducer } from './subCommentReducer';

const requestsReducer = handleRequests;

// eslint-disable-next-line import/prefer-default-export
export const reducers = combineReducers({
  requests: requestsReducer,
  authReducer,
  postReducer,
  commentReducer,
  subCommentReducer
});
