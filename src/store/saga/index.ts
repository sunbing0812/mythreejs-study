import { all, takeEvery } from '@redux-saga/core/effects'
import executeSaga from './excuteSaga'
import api from '../api/index'

function* sagas() {
    for (let key in api) {
        if (api.hasOwnProperty(key)) {
            yield takeEvery(key, (action) => executeSaga(key, action)(api[key]))
        }
    }
}

export default function* rootSaga() {
    yield all([sagas()])
}
