// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXXHqcCV9kaP7wBVExaqmRv1Fe78X_cx8",
  authDomain: "mathchamp-b30de.firebaseapp.com",
  databaseURL: "https://mathchamp-b30de-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Get the selected class from the query string
const urlParams = new URLSearchParams(window.location.search);
const selectedClass = urlParams.get("class");

// Set the class name in the title
document.getElementById("classTitle").textContent = `Leaderboard - Class ${selectedClass}`;

// Listen for NFC data changes in Firebase
database.ref(`NFC_Data/${selectedClass}`).on("value", (snapshot) => {
  const leaderboardData = snapshot.val() || [];

  // Clear the current leaderboard table
  const leaderboardTable = document.getElementById("leaderboardTable");
  leaderboardTable.innerHTML = "";

  // Populate the leaderboard table dynamically
  leaderboardData.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.studentId}</td>
      <td>${student.date}</td>
      <td>${student.correctRate}</td>
    `;
    leaderboardTable.appendChild(row);
  });
});
