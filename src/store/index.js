import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
//
import { reducers } from './reducers';
import { localStorageMiddleware } from './middlewares/middleware';
import { rootSaga } from './sagas/saga';

export const configureStore = () => {

  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware, localStorageMiddleware)),
  );

  sagaMiddleware.run(rootSaga);
  return store;
};
