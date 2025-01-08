import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginStatus = document.getElementById('login-status');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Successful login, redirect to appropriate page (e.g., dashboard)
    window.location.href = '/dashboard';
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    loginStatus.textContent = `Error: ${errorMessage}`;
  }
});
