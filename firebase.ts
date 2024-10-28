

// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkXA6_mggMZ1bCglkTPcjMRjHRHyhhIWE",
  authDomain: "smartspace-4ea04.firebaseapp.com",
  projectId: "smartspace-4ea04",
  storageBucket: "smartspace-4ea04.appspot.com",
  messagingSenderId: "724061319195",
  appId: "1:724061319195:web:800c0d9ba61ac69f4048be"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export {db};