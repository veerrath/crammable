// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7GIBRARO8CQBB6QMPfbPDG9XLLF72ggQ",
  authDomain: "crammable-bbda3.firebaseapp.com",
  databaseURL: "https://crammable-bbda3-default-rtdb.firebaseio.com",
  projectId: "crammable-bbda3",
  storageBucket: "crammable-bbda3.firebasestorage.app",
  messagingSenderId: "330154827345",
  appId: "1:330154827345:web:37578a9b0409c23cd3a270",
  measurementId: "G-43Q9B22272"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);