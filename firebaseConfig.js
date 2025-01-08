import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  // ...
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginButton = document.getElementById('login-button');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginStatus = document.getElementById('login-status');

loginButton.addEventListener('click', async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Successful login, redirect to the game page
    window.location.href = 'game.html'; 
  } catch (error) {
    // Handle login errors
    const errorCode = error.code;
    const errorMessage = error.message;
    loginStatus.textContent = `Error: ${errorMessage}`;
  }
});
