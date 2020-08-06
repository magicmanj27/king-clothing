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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
