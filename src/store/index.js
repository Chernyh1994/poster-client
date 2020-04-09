/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import { createStore, applyMiddleware, compose } from 'redux';

import { reducers } from './reducers';
import { localStorageMiddleware } from '../middlewares/localStorageMiddleware';
import { handleErrorMiddleware } from '../middlewares/handleErrorMiddleware';
import { rootSaga, sagaMiddleware } from './sagas/saga';

export const configureStore = () => {
  const composeEnhancers =
    (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(
      sagaMiddleware,
      localStorageMiddleware,
      handleErrorMiddleware,)
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
