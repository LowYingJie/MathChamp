import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { app } from "./firebase.js"; // Import initialized Firebase app

const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    // Authenticate user with email and password
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log("User logged in:", user);
    alert("Login successful!");
    window.location.href = "homepage.html"; // Redirect to homepage
  } catch (error) {
    console.error("Error during login:", error.message);
    alert("Invalid email or password. Please try again.");
  }
});
