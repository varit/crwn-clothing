import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBOP5iTghXwidsccHQex7rI-ZVVAs0-q-Q",
  authDomain: "crwn-db-b1ff5.firebaseapp.com",
  projectId: "crwn-db-b1ff5",
  storageBucket: "crwn-db-b1ff5.appspot.com",
  messagingSenderId: "917437626644",
  appId: "1:917437626644:web:d706811086de7c663e6a01",
  measurementId: "G-Z010PYPMBT",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;