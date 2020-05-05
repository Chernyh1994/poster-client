import { handleRequests } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-axios';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import instanceAxios from '../../utils/instanceAxios';

const { requestsSagas, requestsMiddleware } = handleRequests({
  driver: createDriver(instanceAxios),
  promisify: true
});

export function* rootSaga() {
  yield all(requestsSagas);
}

export const sagaMiddleware = createSagaMiddleware();
export const requestsMiddle = requestsMiddleware;
