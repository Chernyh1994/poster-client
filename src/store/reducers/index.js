import { combineReducers } from 'redux';
import { handleRequests } from 'redux-saga-requests';

import { authReducer } from './authReducer';

const requestsReducer = handleRequests

export const reducers = combineReducers({
    requests: requestsReducer,
    authReducer: authReducer,
});


