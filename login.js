import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { app } from "./firebase.js";

const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
    window.location.href = "homepage.html"; // Redirect to homepage
  } catch (error) {
    alert("Login failed. Please check your credentials.");
    console.error("Error:", error.message);
  }
});
