import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import firebaseConfig from './firebase.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Handle Google Login
document.getElementById('googleLoginButton').addEventListener('click', async () => {
  try {
    const userCredential = await signInWithPopup(auth, provider);
    console.log("User signed in successfully:", userCredential.user);

    // Redirect to the homepage or next page
    alert(`Welcome, ${userCredential.user.displayName}`);
    window.location.href = "homepage.html";
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    alert(`Sign-in failed: ${error.message}`);
  }
});
