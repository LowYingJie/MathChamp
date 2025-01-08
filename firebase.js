import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
import { firebaseConfig } from "./firebaseConfig.js";

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
