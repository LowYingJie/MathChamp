import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is logged in, display dashboard content
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = `Welcome, ${user.email}`;

    // ... fetch and display user-specific data (e.g., scores)
  } else {
    // User is not logged in, redirect to login page
    window.location.href = '/login';
  }
});
