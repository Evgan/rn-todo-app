import { takeLatest } from 'redux-saga/effects'

export const TODOS_GET_REQIEST = 'TODOS_GET_REQIEST';

const defaultState = {
    totos: {},
    isFetching: false
};

export default function reducer(state = defaultState, action) {
    const {
        type,
        payload,
        response
    } = action;
    console.log('######################  todos reducer');
    console.log('----------------------- action:');
    console.log(action);
    console.log('----------------------- payload = ', payload);
    console.log('----------------------- response = ', response);
    switch (action.type) {
        case 'fetch': {
            return {
                ...state,
                todos: action.response
            }
        }
        default: {
            return {...state}
        }
    }
}


function* getTodosSaga(action){
    console.log('############################## getTodosSaga');
    console.log('----------------------- action:');
    console.log(action);
}

export function* saga() {
    yield takeLatest(TODOS_GET_REQIEST, getTodosSaga);
}
