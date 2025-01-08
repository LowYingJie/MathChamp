import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { app } from "./firebase.js"; // Ensure firebase.js is configured

const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
    alert("Login successful!");
    window.location.href = "homepage.html"; // Redirect to homepage
  } catch (error) {
    console.error("Login failed:", error.message);
    alert("Invalid email or password. Please try again.");
  }
});
