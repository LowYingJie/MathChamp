import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { app } from "./firebase.js"; // Ensure firebase.js is set up with your Firebase config

const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent the default form submission

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
    alert("Login successful!");
    window.location.href = "homepage.html"; // Redirect to homepage after successful login
  } catch (error) {
    console.error("Login failed:", error.message);
    alert("Login failed. Please check your email and password.");
  }
});
