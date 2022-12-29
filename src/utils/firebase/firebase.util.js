import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB73uHT6E1-klIL5Hbl-DYSLMiaJ2n3C9Q",
  authDomain: "cloth-eshop.firebaseapp.com",
  projectId: "cloth-eshop",
  storageBucket: "cloth-eshop.appspot.com",
  messagingSenderId: "104237377183",
  appId: "1:104237377183:web:f8752dad7d0d1075d524aa",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
