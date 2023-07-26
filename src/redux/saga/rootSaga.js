
import { all } from 'redux-saga/effects'
import { watchCommentAsync } from './getComment'

export default function* rootSaga() {
    yield all([
        watchCommentAsync()
    ])
}