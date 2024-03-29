import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMAL6Z0MZgQFr97C6wvQ6QmwjWDniWvvI",
  authDomain: "quran-32cc8.firebaseapp.com",
  projectId: "quran-32cc8",
  storageBucket: "quran-32cc8.appspot.com",
  messagingSenderId: "1027097972739",
  appId: "1:1027097972739:web:91ecc9907610f5c646be36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const google = new GoogleAuthProvider();

// Sign up:
const signupWithEmailAndPassword = async (email, password) => {
  try {
    const res = createUserWithEmailAndPassword(auth, email, password);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// Sign in:
const signInWithEmail = async (email, password) => {
  try {
    const res = signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// Reset password:
const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.log(err);
  }
};

// Sign in with google:
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, google);
    return res.user;
  } catch (err) {
    console.log(err);
  }
};

export {
  auth,
  signupWithEmailAndPassword,
  signInWithEmail,
  resetPassword,
  signInWithGoogle,
};
