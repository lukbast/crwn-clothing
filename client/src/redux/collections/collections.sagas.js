import {call, put, takeLatest, all} from 'redux-saga/effects'

import CollectionsActionTypes from './collections.types'
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './collections.actions'

export function* fetchColletionsAsync() {

    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get();
        const colletionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(colletionsMap))
    } catch (error){
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart(){
    yield takeLatest(
        CollectionsActionTypes.FETCH_COLLECTIONS_START,
        fetchColletionsAsync
    )
}



export function* collectionsSaga (){
    yield all([call(fetchCollectionsStart)])
}