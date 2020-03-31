import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { handleRequests } from 'redux-saga-requests';

const requestsReducer = handleRequests

export const reducers = combineReducers({
    requests: requestsReducer,
    authReducer: authReducer
  });


