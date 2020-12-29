import { all } from 'redux-saga/effects'

import {saga as todosSaga} from '../ducks/todos'

export default function* () {
    yield  all([
        todosSaga()
    ])
}
