import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get the selected class from the query string
const urlParams = new URLSearchParams(window.location.search);
const selectedClass = urlParams.get("class");

// Set the class name in the title
document.getElementById("classTitle").textContent = `Leaderboard - Class ${selectedClass}`;

// Fetch leaderboard data from Firestore
async function fetchLeaderboardData(classId) {
  try {
    const docRef = doc(db, "leaderboard", classId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().students; // Return students array
    } else {
      console.error("No data found for class:", classId);
      return [];
    }
  } catch (error) {
    console.error("Error fetching leaderboard data:", error);
    return [];
  }
}

// Populate the leaderboard table
async function populateLeaderboard() {
  const leaderboardData = await fetchLeaderboardData(selectedClass);
  const leaderboardTable = document.getElementById("leaderboardTable");

  leaderboardData.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.rank}</td>
      <td>${student.name}</td>
      <td>${student.studentId}</td>
      <td>${student.date}</td>
      <td>${student.correctRate}</td>
    `;
    leaderboardTable.appendChild(row);
  });
}

// Fetch and display leaderboard data
populateLeaderboard();

// Handle the "Back to Class Selection" button
document.getElementById("backButton").addEventListener("click", () => {
  window.location.href = "homepage.html"; // Navigate back to the class selection page
});
