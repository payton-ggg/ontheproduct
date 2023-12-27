// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-8GS4BluTkbIT8MU-dlwCHGOydfm8OdA",
  authDomain: "ontheproduct-project.firebaseapp.com",
  projectId: "ontheproduct-project",
  storageBucket: "ontheproduct-project.appspot.com",
  messagingSenderId: "612768361418",
  appId: "1:612768361418:web:978c94ffac770112fdbd33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
};