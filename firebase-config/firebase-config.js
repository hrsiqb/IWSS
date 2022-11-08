// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMuBmoM6pxgt1dmDT8enXPYI31tBYZ-fc",
  authDomain: "iwss-llc.firebaseapp.com",
  projectId: "iwss-llc",
  storageBucket: "iwss-llc.appspot.com",
  messagingSenderId: "221423893828",
  appId: "1:221423893828:web:d70cd0680f69399563eb11",
  measurementId: "G-3ZWEPFSX8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);