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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({ displayName, email, createAt, ...additionalData });
    } catch (error) {
      console.log("Error in creating user.", error.message);
    }
  }

  return userRef;
};
