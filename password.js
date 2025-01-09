import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { app } from "./firebase.js"; // Import initialized Firebase app

const auth = getAuth(app);

document.getElementById("passwordResetForm").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById("resetEmail").value.trim();

  try {
    // Send password reset email
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent! Please check your inbox.");
    window.location.href = "index.html"; // Redirect to login page
  } catch (error) {
    console.error("Error sending reset email:", error.message);
    alert("Unable to send reset email. Please check the email address and try again.");
  }
});
