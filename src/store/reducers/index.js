import { combineReducers } from 'redux';
import { handleRequests } from 'redux-saga-requests';

import { authReducer } from './authReducer';
import { postReducer } from './postReducer';
import { commentReducer } from './commentReducer';
import { userReducer } from './userReducer';

const requestsReducer = handleRequests;

export const reducers = combineReducers({
  requests: requestsReducer,
  authReducer,
  postReducer,
  commentReducer,
  userReducer
});
