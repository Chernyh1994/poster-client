import { createStore, applyMiddleware, compose } from 'redux';

import { reducers } from './reducers';
import { localStorageMiddleware } from '../middlewares/localStorageMiddleware';
import { handleErrorMiddleware } from '../middlewares/handleErrorMiddleware';
import { rootSaga, sagaMiddleware } from './sagas/saga';

const initStore = () => {
  const composeEnhancers =
    (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const middlewares = applyMiddleware(sagaMiddleware, localStorageMiddleware, handleErrorMiddleware);

  const store = createStore(
    reducers,
    composeEnhancers(middlewares),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default initStore;
