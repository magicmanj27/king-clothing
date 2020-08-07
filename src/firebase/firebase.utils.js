import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDYSYFA1IKKRdfkq0RUn5DHdmTVYHH8DmA",
  authDomain: "king-db-3fa78.firebaseapp.com",
  databaseURL: "https://king-db-3fa78.firebaseio.com",
  projectId: "king-db-3fa78",
  storageBucket: "king-db-3fa78.appspot.com",
  messagingSenderId: "1091181850396",
  appId: "1:1091181850396:web:a8e192aececea58f1c14d9",
  measurementId: "G-97PD9VPVQ5",
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
