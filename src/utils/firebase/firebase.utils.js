import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
