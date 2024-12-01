// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1siYW8nBQgtdNl6G16LBZQHnFO-pZGUo",
  authDomain: "bookstore-52420.firebaseapp.com",
  projectId: "bookstore-52420",
  storageBucket: "bookstore-52420.firebasestorage.app",
  messagingSenderId: "752563148064",
  appId: "1:752563148064:web:32771b5058fb2557aa3345",
  measurementId: "G-6PFC4DWZC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {app, db};