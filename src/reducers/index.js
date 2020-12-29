import { combineReducers } from 'redux'
import totosReducer from '../ducks/todos'

const rootReducer = combineReducers( {
    totos: totosReducer
});

export default rootReducer
