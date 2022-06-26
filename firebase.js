// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage, ref } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyDdUp3tPLUu6Yi8lY6RjMxC6aPj5V4l0uI",
  authDomain: "red-social-v1.firebaseapp.com",
  projectId: "red-social-v1",
  storageBucket: "red-social-v1.appspot.com",
  messagingSenderId: "828832542271",
  appId: "1:828832542271:web:1759c03661c575cff7928a"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage, firebaseConfig, app};