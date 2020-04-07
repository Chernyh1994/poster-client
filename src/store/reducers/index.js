import { combineReducers } from 'redux';
import { handleRequests } from 'redux-saga-requests';

import { authReducer } from './authReducer';
import { postReducer } from './postReducer';
import { commentReducer } from './commentReducer';

const requestsReducer = handleRequests

export const reducers = combineReducers({
    requests: requestsReducer,
    authReducer: authReducer,
    postReducer: postReducer,
    commentReducer: commentReducer,
});


