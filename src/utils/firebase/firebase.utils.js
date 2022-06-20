import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzSraTqG5RZXCzmXcdiWoZZpxjcHOZLf4",
  authDomain: "shopping-cart-db-52d0f.firebaseapp.com",
  projectId: "shopping-cart-db-52d0f",
  storageBucket: "shopping-cart-db-52d0f.appspot.com",
  messagingSenderId: "701830252946",
  appId: "1:701830252946:web:e657541e4f3d858edbd94b",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

// step 1 : Create Authentication Provider like google, facebook etc.
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

// step 2 : Create instance of firebase auth
export const auth = getAuth();

// step 3: Create Google popup signIn method
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Create database instance
export const db = getFirestore();

// Create user document in database
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
