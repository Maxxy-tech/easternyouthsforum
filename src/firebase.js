// Import the functions you need from the SDKs you need
import {initializeApp } from"firebase/app";
import {getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBmtCBZutj68H64XDurF9xyBAf3fX-MB64",
  authDomain: "eastern-youths-forum.firebaseapp.com",
  projectId: "eastern-youths-forum",
  storageBucket: "eastern-youths-forum.appspot.com",
  messagingSenderId: "570355142925",
  appId: "1:570355142925:web:ce34db868fa60e0734e044",
  measurementId: "G-R545VMGK0T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db =getFirestore(app)

