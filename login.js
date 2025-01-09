import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import firebaseConfig from './firebase.js'; // Import your Firebase config

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase app initialized:", app.name);
const auth = getAuth(app);

const loginForm = document.getElementById('loginForm');
const forgotPasswordLink = document.getElementById('forgotPassword'); // Link to trigger reset password

// Login Form Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Get email and password values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate email ends with @primary.mathchamp.my
    const emailPattern = /@primary\.mathchamp\.my$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email. Please use an email ending with '@primary.mathchamp.my'.");
        return;
    }

    // Validate password contains "mathchamp"
    const passwordPattern = /mathchamp/;
    if (!passwordPattern.test(password)) {
        alert("Invalid password. Password must contain 'mathchamp'.");
        return;
    }

    // Proceed with Firebase Authentication
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("User logged in:", userCredential.user); // Successful login
            alert("Login successful!");
            window.location.href = "homepage.html"; // Redirect to homepage
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

// Forgot Password Functionality
forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent link navigation

    const email = document.getElementById('email').value.trim();

    if (!email) {
        alert("Please enter your email address to reset your password.");
        return;
    }

    // Validate email ends with @primary.mathchamp.my
    const emailPattern = /@primary\.mathchamp\.my$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email. Please use an email ending with '@primary.mathchamp.my'.");
        return;
    }

    // Send password reset email
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Password reset email sent! Please check your inbox.");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Password Reset Error:", errorCode, errorMessage);

            if (errorCode === 'auth/user-not-found') {
                alert("No user found with this email.");
            } else {
                alert("Failed to send password reset email. Please try again.");
            }
        });
});
