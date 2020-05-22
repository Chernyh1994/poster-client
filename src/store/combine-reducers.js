import { combineReducers } from 'redux';
import { handleRequests } from 'redux-saga-requests';

import currentAuthUser from './currentAuthUser/reducers';
import postReducer from './post/reducer';
import commentReducer from './comment/reducer';

const requestsReducer = handleRequests;

export default combineReducers({
  requests: requestsReducer,
  currentAuthUser,
  posts: postReducer,
  comments: commentReducer
});
