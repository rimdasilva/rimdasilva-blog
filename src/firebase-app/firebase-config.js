import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAsRP36pBmM6mV86rcUDCgGvK7mD6ZZv-E",
  authDomain: "rimdasilva-7552e.firebaseapp.com",
  projectId: "rimdasilva-7552e",
  storageBucket: "rimdasilva-7552e.appspot.com",
  messagingSenderId: "582826856441",
  appId: "1:582826856441:web:73a0b0d895919b139c7728",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
