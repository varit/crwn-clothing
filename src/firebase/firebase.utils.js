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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  
  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      }) 
    } catch (error){
      console.log("error creating user", error.message);
    }
  }
  return userRef;

};



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;