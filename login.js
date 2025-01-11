import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import firebaseConfig from './firebase.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase initialized:", app.name);
const auth = getAuth(app);

// Hardcoded users for testing purposes
const hardcodedUsers = {
  "lowyingjie@primary.mathchamp.my": "123456",
  "haikal@primary.mathchamp.my": "789012",
  "zahir@primary.mathchamp.my": "345678",
  "faiq@primary.mathchamp.my": "901234",
  "drsuhana@primary.mathchamp.my": "567890"
};

// Handle login form submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    alert("Please fill in both email and password fields.");
    return;
  }

  // Check hardcoded credentials for testing
  if (hardcodedUsers[email] && hardcodedUsers[email] === password) {
    alert(`Login successful! Welcome, ${email}`);
    window.location.href = "homepage.html";
    return;
  }

  // Proceed with Firebase Authentication
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged in via Firebase:", userCredential.user);
    alert("Login successful!");
    window.location.href = "homepage.html";
  } catch (error) {
    console.error("Login error:", error.code, error.message);
    if (error.code === 'auth/user-not-found') {
      alert("No user found with this email.");
    } else if (error.code === 'auth/wrong-password') {
      alert("Incorrect password.");
    } else {
      alert("Login failed. Please try again.");
    }
  }
});
