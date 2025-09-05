// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { get } from "http";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYCVeOvwqAkCpLSP5DI1NzKbfA-FWve0Q",
  authDomain: "mockmate-47199.firebaseapp.com",
  projectId: "mockmate-47199",
  storageBucket: "mockmate-47199.firebasestorage.app",
  messagingSenderId: "266250476131",
  appId: "1:266250476131:web:f215c203e2e88350d5f656",
  measurementId: "G-QFM11ZBFBL"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);