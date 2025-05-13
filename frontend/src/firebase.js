// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "merntaskmanager-e0506.firebaseapp.com",
  projectId: "merntaskmanager-e0506",
  storageBucket: "merntaskmanager-e0506.firebasestorage.app",
  messagingSenderId: "1076593982441",
  appId: "1:1076593982441:web:dcc0a0072fefb3e6416978",
  measurementId: "G-S6RDNZJ3C7"
};
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // authDomain: "task-manager-c9dda.firebaseapp.com",
  // projectId: "task-manager-c9dda",
  // storageBucket: "task-manager-c9dda.appspot.com",
  // messagingSenderId: "252343493674",
  // appId: "1:252343493674:web:15f42600d70c7ce99e8f53",
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBmf7MlBm7zN7yIm-pxxSRe4yznqRhUcHo",
  // authDomain: "merntaskmanager-e0506.firebaseapp.com",
  // projectId: "merntaskmanager-e0506",
  // storageBucket: "merntaskmanager-e0506.firebasestorage.app",
  // messagingSenderId: "1076593982441",
  // appId: "1:1076593982441:web:dcc0a0072fefb3e6416978",
  // measurementId: "G-S6RDNZJ3C7"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
