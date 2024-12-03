// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQw8h5EmnxCNfpvt5GYrUXjQH1ZDfFHwQ",
  authDomain: "dragon-news-letter-829e4.firebaseapp.com",
  projectId: "dragon-news-letter-829e4",
  storageBucket: "dragon-news-letter-829e4.firebasestorage.app",
  messagingSenderId: "823197399840",
  appId: "1:823197399840:web:2dc8e702822560bdf33545"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth; 