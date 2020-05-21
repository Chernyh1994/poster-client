import { createStore, applyMiddleware, compose } from 'redux';

import  combineReducers from './combine-reducers.js';
import { localStorageMiddleware } from '../middlewares/localStorageMiddleware';
import { handleErrorMiddleware } from '../middlewares/handleErrorMiddleware';
import { rootSaga, sagaMiddleware, requestsMiddle } from './root-saga';

const initStore = () => {
  const composeEnhancers =
    (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const middlewares = applyMiddleware(sagaMiddleware, ...requestsMiddle, localStorageMiddleware, handleErrorMiddleware);

  const store = createStore(
    combineReducers,
    composeEnhancers(middlewares),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default initStore;
