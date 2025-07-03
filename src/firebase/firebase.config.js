// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoISELeioO4HHpNQwqLdivt-yvF0MfCLI",
  authDomain: "dragon-news-74d7b.firebaseapp.com",
  projectId: "dragon-news-74d7b",
  storageBucket: "dragon-news-74d7b.firebasestorage.app",
  messagingSenderId: "319562637686",
  appId: "1:319562637686:web:b121fa54cc1b7c1f651a57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
