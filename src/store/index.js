import { rootReduser } from './reducers';
import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import  {sagaWatcher}  from './sagas/saga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReduser,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(sagaWatcher)

export default store;
