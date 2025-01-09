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

    // Check if email ends with @primary.mathchamp.my and password contains "mathchamp"
    const emailPattern = /@primary\.mathchamp\.my$/;
    const passwordPattern = /mathchamp/;

    if (!emailPattern.test(email)) {
        alert("Invalid email. Please use an email ending with '@primary.mathchamp.my'.");
        return;
    }

    if (!passwordPattern.test(password)) {
        alert("Invalid password. Password must contain 'mathchamp'.");
        return;
    }

    // Proceed with Firebase Authentication
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
