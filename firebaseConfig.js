// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
// Add other SDKs as needed based on your project requirements
// For example: Authentication, Firestore, Realtime Database, etc.

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXXHqcCV9kaP7wBVExaqmRv1Fe78X_cx8",
  authDomain: "mathchamp-b30de.firebaseapp.com",
  databaseURL: "https://mathchamp-b30de-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mathchamp-b30de",
  storageBucket: "mathchamp-b30de.appspot.com", // Corrected storageBucket
  messagingSenderId: "668143144572",
  appId: "1:668143144572:web:f86bcd48f84d9dc82383f9",
  measurementId: "G-EX8CWRLTTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics if needed
const analytics = getAnalytics(app);
