// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFqts4yF0vzvCQ-MqHbNCEe0vX0yFzCc0",
  authDomain: "netflix-gpt-f7805.firebaseapp.com",
  projectId: "netflix-gpt-f7805",
  storageBucket: "netflix-gpt-f7805.firebasestorage.app",
  messagingSenderId: "558822148152",
  appId: "1:558822148152:web:ab99edefd5bfeaa38e7ecd",
  measurementId: "G-SNF87Z3VG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);