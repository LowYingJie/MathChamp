import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { firebaseConfig } from "./firebaseConfig.js"; // Add your Firebase config in firebaseConfig.js

export const app = initializeApp(firebaseConfig);
