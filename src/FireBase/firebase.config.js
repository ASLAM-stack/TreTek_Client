// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5zMEHW3JVxtugCjY6Lile1Zp_Jy6Mapk",
  authDomain: "trektek-auth.firebaseapp.com",
  projectId: "trektek-auth",
  storageBucket: "trektek-auth.appspot.com",
  messagingSenderId: "765720466278",
  appId: "1:765720466278:web:fcf2683ca13b021259eea7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;