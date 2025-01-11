import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebaseConfig.js";

let app;
let analytics;

try {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
  console.log("Firebase initialized successfully.");
} catch (error) {
  console.error("Firebase initialization error:", error);
}

export { app, analytics };
