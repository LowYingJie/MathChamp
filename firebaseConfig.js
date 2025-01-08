// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXXHqcCV9kaP7wBVExaqmRv1Fe78X_cx8",
  authDomain: "mathchamp-b30de.firebaseapp.com",
  databaseURL: "https://mathchamp-b30de-default-rtdb.firebaseio.com/",
  projectId: "mathchamp-b30de",
  storageBucket: "mathchamp-b30de.appspot.com",
  messagingSenderId: "668143144572",
  appId: "1:668143144572:web:43f530212a54f1402383f9",
  measurementId: "G-1SF82Y837L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
