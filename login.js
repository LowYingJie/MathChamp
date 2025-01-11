import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import firebaseConfig from './firebase.js'; // Import your Firebase config

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase app initialized:", app.name);
const auth = getAuth(app);

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page refresh

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate input fields
    if (!email || !password) {
        alert("Please fill in both email and password fields.");
        return;
    }

    // Proceed with Firebase Authentication
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User successfully authenticated
            console.log("User logged in:", userCredential.user);
            alert(`Login successful! Welcome, ${userCredential.user.email}`);
            window.location.href = "homepage.html"; // Redirect to homepage
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Login Error:", errorCode, errorMessage);

            switch (errorCode) {
                case 'auth/user-not-found':
                    alert("No user found with this email.");
                    break;
                case 'auth/wrong-password':
                    alert("Incorrect password.");
                    break;
                case 'auth/invalid-email':
                    alert("Invalid email format.");
                    break;
                case 'auth/too-many-requests':
                    alert("Too many unsuccessful attempts. Please try again later.");
                    break;
                default:
                    alert("Login Failed. Please try again.");
            }
        });
});
