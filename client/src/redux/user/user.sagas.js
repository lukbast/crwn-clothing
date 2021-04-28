import {takeLatest, put, all, call} from 'redux-saga/effects' 

import UserActionsTypes from './user.types'

import {auth, googleProvider, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils'
import {googleSignInFailure, googleSignInSuccess,
       emailSignInFailure, emailSignInSuccess,
       signOutSuccess, signOutFailure,
       signUpSuccess, signUpFailure}
    from './user.actions'

export function* getSnapshotFromUserAuth (userAuth, additionalData){
        const userRef = yield call(createUserProfileDocument, userAuth.user, additionalData)
        const userSnapshot = yield userRef.get();
        return userSnapshot
}

// google sign in
export function* signInWithGoogle(){
    try {
        const userAuth = yield auth.signInWithPopup(googleProvider)
        const userSnapshot = yield getSnapshotFromUserAuth(userAuth)
        yield put(googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
        // put(), puts things back into regular Redux Flow
    } catch (err) {
        yield put(googleSignInFailure(err))
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionsTypes.GOOGLE_SIGN_IN_START, signInWithGoogle )
}

// email and password sign in

export  function* onEmailSignInStart(){
    yield takeLatest(UserActionsTypes.EMAIL_SIGN_IN_START, signInWithEmail)
    }

export function* signInWithEmail({payload:{ email, password}}){
    try {
        const userAuth  = yield auth.signInWithEmailAndPassword(email, password)
        const userSnapshot = yield getSnapshotFromUserAuth(userAuth)
        yield put(emailSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))

    } catch (err){
        yield put(emailSignInFailure(err))
    }
}

export function* isUserAuth(){
    try {
         const userAuth = yield getCurrentUser();
         if (!userAuth) return;
         yield getSnapshotFromUserAuth(userAuth)
    } catch (err) {
        yield put(emailSignInFailure(err))

    }
}

//sign out

export function* signOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch (err) {
        yield put(signOutFailure(err))
    }
}

export function* onSignOut(){
    yield takeLatest(UserActionsTypes.SIGN_OUT_START, signOut)
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionsTypes.CHECK_USER_SESSION, isUserAuth)
}

// sign up


export function* signUp ({payload: {email, password, displayName}}){
    console.log([email, password, displayName])
    try {
        const user = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user, additionalData:{displayName}}))
    } catch (err) {
        yield put(signUpFailure(err))
    }
}

export function* signInAfterSignUp ({payload: {user, additionalData}}){
 const userSnap = yield  getSnapshotFromUserAuth (user, additionalData)
 yield put(emailSignInSuccess({id: userSnap.id, ...userSnap.data()}))
}

export function* onSignUp(){
    yield takeLatest(UserActionsTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess(){
    yield takeLatest(UserActionsTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas () {
    yield all([
      call(onGoogleSignInStart),
      call(onEmailSignInStart),
      call(onCheckUserSession),
      call(onSignOut),
      call(onSignUp),
      call(onSignUpSuccess)
    ])
}