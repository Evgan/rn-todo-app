import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { connectRouter } from 'connected-react-router'

const appReducer = history => combineReducers( {
    firebase: firebaseReducer,
    router: connectRouter(history)
});

const rootReducer = history => (state, action) => appReducer(history)(state, action);

export default rootReducer
