import reducers from './reducers';
import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import hellSagas from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(hellSagas)

export default store;
