import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import firebaseConfig from './firebase.js'; // Import your config

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase app initialized:", app.name);
const auth = getAuth(app);

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page refresh

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert("Please fill in both email and password fields.");
        return;
    }

    // Check for hardcoded credentials for testing
    if (email === "lowjie@graduate.utm.my" && password === "12345") {
        console.log("Test credentials verified.");
        alert("Login successful with test credentials.");
        window.location.href = "homepage.html"; // Redirect
        return;
    }

    // Proceed with Firebase Authentication for other users
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            console.log("User logged in:", userCredential.user); // Check in console
            alert("Login successful!");
            window.location.href = "homepage.html"; // Redirect
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Login Error:", errorCode, errorMessage);

            if (errorCode === 'auth/user-not-found') {
                alert("No user found with this email.");
            } else if (errorCode === 'auth/wrong-password') {
                alert("Incorrect password.");
            } else {
                alert("Login Failed. Please try again.");
            }
        });
});
