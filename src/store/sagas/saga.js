import { handleRequests } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-axios';
import axios from 'axios';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

axios.defaults.withCredentials = true;

const { requestsSagas } = handleRequests({
  driver: createDriver(
    axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }),
  )
});

export function* rootSaga() {
  yield all(requestsSagas);
}

export const sagaMiddleware = createSagaMiddleware();
