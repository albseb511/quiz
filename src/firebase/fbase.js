import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { store } from "../redux/store";
import {
  createUserSuccess,
  loginUserSuccess,
  logoutUserSuccess,
} from "../routes/Auth";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const fbaseapp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export const users = db.collection("users");
export const categories = db.collection("categories");
export const questions = db.collection("questions");

firebase.auth().onAuthStateChanged(async (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // redux state
    store.dispatch(loginUserSuccess(user));

    // check if user is in users collection
    const res = await users.doc(uid);
    res.get().then(async (doc) => {
      if (doc.exists) {
        return true;
      } else {
        const { serverTimestamp } = firebase.firestore.FieldValue;
        await users.doc(uid).set({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          createdAt: serverTimestamp(),
          roles: {
            user: true,
          },
        });
        store.dispatch(
          createUserSuccess({ uid, name: user.displayName, email: user.email })
        );
      }
    });
    // ...
  } else {
    // User is signed out
    // logout
    store.dispatch(logoutUserSuccess());
  }
});

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
