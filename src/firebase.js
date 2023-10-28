// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDShkCBQAqVngNX-EZQwrWaiuld-hqJ-0",
  authDomain: "imagegallery-649a0.firebaseapp.com",
  projectId: "imagegallery-649a0",
  storageBucket: "imagegallery-649a0.appspot.com",
  messagingSenderId: "646352526423",
  appId: "1:646352526423:web:7c537b66034ff701af5712",
  measurementId: "G-L1LMZF75M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);