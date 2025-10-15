// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFau7LA6B10bWKiFk1TfFQd0Lk8ftfIj4",
  authDomain: "dragon-news-8e792.firebaseapp.com",
  projectId: "dragon-news-8e792",
  storageBucket: "dragon-news-8e792.firebasestorage.app",
  messagingSenderId: "911512170775",
  appId: "1:911512170775:web:f3bf7378de351f86dfc752"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;