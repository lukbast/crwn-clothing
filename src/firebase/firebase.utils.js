import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const config ={
    apiKey: "AIzaSyCCNgHz-zEWKBZUXVhTNSfbvXDpvg9jIwM",
    authDomain: "crwn-clothing-db-abfa8.firebaseapp.com",
    projectId: "crwn-clothing-db-abfa8",
    storageBucket: "crwn-clothing-db-abfa8.appspot.com",
    messagingSenderId: "944427973665",
    appId: "1:944427973665:web:f4e72a0a60737c78a83760",
    measurementId: "G-B6CJ8H7VMG"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

        const userRef=  firestore.doc(`users/${userAuth.uid}`)

        const snapshot =  await userRef.get();

        if(!snapshot.exists){
            const {displayName, email} = userAuth;
            const createdAt = Date();
        

            try{
                await userRef.set({ displayName,
                email, createdAt, ...additionalData})
            } catch (err) {
                console.log('error creating user', err.message)
            }   
        }
    return userRef
};

export default firebase;
