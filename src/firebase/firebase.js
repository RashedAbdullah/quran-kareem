import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
export const signupWithEmailAndPassword = async (email, password) => {
  try {
    const res = createUserWithEmailAndPassword(auth, email, password);
    console.log(res.user);
  } catch (err) {
    console.log(err);
  }
};
