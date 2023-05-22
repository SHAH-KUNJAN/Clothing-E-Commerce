import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyCodBWUS-6YfjMgLaloMHXb_beuiEoRu20",
  authDomain: "clothing-db-da87b.firebaseapp.com",
  projectId: "clothing-db-da87b",
  storageBucket: "clothing-db-da87b.appspot.com",
  messagingSenderId: "848855758764",
  appId: "1:848855758764:web:c4d07b515918b845a8ac09",
  measurementId: "G-1RTW6F60PK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
