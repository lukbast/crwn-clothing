import {all, call} from 'redux-saga/effects'

import {collectionsSaga} from './collections/collections.sagas'
import {userSagas} from './user/user.sagas'
import {cartSagas} from './cart/cart.sagas'

export default function* rootSaga() {
    yield all([call(collectionsSaga), call(userSagas), call(cartSagas)])
}