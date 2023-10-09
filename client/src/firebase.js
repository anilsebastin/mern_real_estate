// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3a8fe.firebaseapp.com",
  projectId: "mern-estate-3a8fe",
  storageBucket: "mern-estate-3a8fe.appspot.com",
  messagingSenderId: "950891781234",
  appId: "1:950891781234:web:1f0dd64e93888990f7b6eb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
