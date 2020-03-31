import { handleRequests } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-axios';
import axios from 'axios';
import { all } from 'redux-saga/effects';

axios.defaults.withCredentials = true;

const { requestsSagas } = handleRequests({
    driver: createDriver(
    axios.create({
        baseURL: process.env.REACT_APP_DOMAIN,
    }),
    ),
});

export function* rootSaga() {
    yield all(requestsSagas);
}