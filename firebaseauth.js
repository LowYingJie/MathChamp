// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXXHqcCV9kaP7wBVExaqmRv1Fe78X_cx8",
  authDomain: "mathchamp-b30de.firebaseapp.com",
  projectId: "mathchamp-b30de",
  storageBucket: "mathchamp-b30de.firebasestorage.app",
  messagingSenderId: "668143144572",
  appId: "1:668143144572:web:43f530212a54f1402383f9",
  measurementId: "G-1SF82Y837L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
