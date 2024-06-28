// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authvault-fb8ba.firebaseapp.com",
  projectId: "authvault-fb8ba",
  storageBucket: "authvault-fb8ba.appspot.com",
  messagingSenderId: "869610275690",
  appId: "1:869610275690:web:d50b63bf7e76752d9f1b13",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
