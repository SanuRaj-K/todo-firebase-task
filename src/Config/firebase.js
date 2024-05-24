import { initializeApp } from "firebase/app";

import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsnDF0BmwDVCDV1GxTpOVMV7BS4rCNVgg",
  authDomain: "todo-40fda.firebaseapp.com",
  projectId: "todo-40fda",
  storageBucket: "todo-40fda.appspot.com",
  messagingSenderId: "71702888407",
  appId: "1:71702888407:web:52b473a431cd64b1545592",
  measurementId: "G-9XCPT80RGF",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
