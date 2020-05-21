import { combineReducers } from 'redux';
import { handleRequests } from 'redux-saga-requests';

import authReducer from './auth/reducer';
import postReducer from './post/reducer';
import commentReducer from './comment/reducer';

const requestsReducer = handleRequests;

export default combineReducers({
  requests: requestsReducer,
  authReducer,
  postReducer,
  commentReducer,
});