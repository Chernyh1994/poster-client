import { combineReducers } from 'redux';
import { handleRequests } from 'redux-saga-requests';

import { authReducer } from './authReducer';
import { postReducer } from './postReducer';

const requestsReducer = handleRequests

export const reducers = combineReducers({
    requests: requestsReducer,
    authReducer: authReducer,
    postReducer: postReducer,
});


