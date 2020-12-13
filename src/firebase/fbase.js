import firebase from "firebase/app"
import 'firebase/auth';
import 'firebase/firestore'
import { store } from "../redux/store";
import { createUserSuccess, loginUserSuccess, logoutUserSuccess } from "../routes/Auth";

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "masaiquiz.firebaseapp.com",
    databaseURL: "https://masaiquiz.firebaseio.com",
    projectId: "masaiquiz",
    storageBucket: "masaiquiz.appspot.com",
    messagingSenderId: "323063165147",
    appId: "1:323063165147:web:06e571f6d19009b878dcfe"
};

export const fbaseapp = firebase.initializeApp( firebaseConfig )

const db = firebase.firestore();
export const users = db.collection('users')
export const categories = db.collection('categories')

firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // redux state
      store.dispatch( loginUserSuccess( user ) )
      const res = await users.doc(uid)
      res.get().then(async(doc)=>{
          if(doc.exists){
            return true
          }
          else{
            const { serverTimestamp } = firebase.firestore.FieldValue;
            await users.doc(uid).set({
              uid: user.uid,
              name: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
              createdAt: serverTimestamp(),
              roles: ['user']
            })
            store.dispatch( createUserSuccess({uid, name:user.displayName, email: user.email }) )
          }
      })
      // ...
    } else {
      // User is signed out
      // ...
        store.dispatch( logoutUserSuccess( ) )
    }
  });

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();