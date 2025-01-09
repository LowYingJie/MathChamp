import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import firebaseConfig from './firebase.js'; // Import your Firebase config

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase app initialized:", app.name);
const auth = getAuth(app);

const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!name || !email || !password) {
        alert("Please fill in all the fields.");
        return;
    }

    // Create user with Firebase Authentication
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User created successfully
            console.log("User created:", userCredential.user);
            alert(`Welcome ${name}! Your account has been created successfully.`);
            window.location.href = "index.html"; // Redirect to login page
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Signup Error:", errorCode, errorMessage);

            if (errorCode === 'auth/email-already-in-use') {
                alert("This email is already registered.");
            } else if (errorCode === 'auth/weak-password') {
                alert("Password is too weak. Please use a stronger password.");
            } else {
                alert("Signup failed. Please try again.");
            }
        });
});
