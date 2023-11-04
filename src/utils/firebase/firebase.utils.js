import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeYQ6IMxaB7MqUKcPlzFJ0vWKqdbog7uM",
  authDomain: "star-clothing-db-48021.firebaseapp.com",
  projectId: "star-clothing-db-48021",
  storageBucket: "star-clothing-db-48021.appspot.com",
  messagingSenderId: "118410786187",
  appId: "1:118410786187:web:075b6ce5e01daa4a81ab8e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
