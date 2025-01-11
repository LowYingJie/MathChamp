import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import firebaseConfig from './firebaseConfig.js'; // Import Firebase config

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase app initialized:", app.name);
const auth = getAuth(app);

// Handle Login
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page refresh

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    alert("Please fill in both email and password fields.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User logged in:", userCredential.user);
      alert(`Login successful! Welcome, ${userCredential.user.email}`);
      window.location.href = "homepage.html"; // Redirect to homepage
    })
    .catch((error) => {
      console.error("Login Error:", error.code, error.message);
      alert("Login Failed: " + error.message);
    });
});

// Handle Registration
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page refresh

  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value.trim();

  if (!email || !password) {
    alert("Please fill in both email and password fields.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User registered:", userCredential.user);
      alert(`Registration successful! Welcome, ${userCredential.user.email}`);
    })
    .catch((error) => {
      console.error("Registration Error:", error.code, error.message);
      alert("Registration Failed: " + error.message);
    });
});
