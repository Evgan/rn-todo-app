import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import saga from '../redux/saga'
import rootReducer from '../reducers/index'


const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);

const store =  createStore(
    rootReducer,
    enhancer
);

sagaMiddleware.run(saga);

export {
    store,
}
