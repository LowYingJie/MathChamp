// Static data for demonstration (standard Firebase format for dates)
const classData = {
  "1A": [
    { rank: 1, name: "Ahmad Faris", studentId: "85c54b03", date: "2025-01-09", correctRate: 96 },
    { rank: 2, name: "Lim Wei Jun", studentId: "62f8a92c", date: "2025-01-09", correctRate: 92 },
    { rank: 3, name: "Preethi Raj", studentId: "94b7d12f", date: "2025-01-09", correctRate: 89 },
    { rank: 4, name: "Aisyah Zainab", studentId: "29a3c65d", date: "2025-01-09", correctRate: 85 },
  ],
  "1B": [
    { rank: 1, name: "Hakim Roslan", studentId: "77d92c11", date: "2025-01-09", correctRate: 94 },
    { rank: 2, name: "Tan Hui Min", studentId: "a92d78bc", date: "2025-01-09", correctRate: 91 },
    { rank: 3, name: "Kavitha Rani", studentId: "b8d97d12", date: "2025-01-09", correctRate: 88 },
    { rank: 4, name: "Nurul Ain", studentId: "cd9f82ba", date: "2025-01-09", correctRate: 83 },
  ],
  // Add other classes...
};

// Convert date from standard format (YYYY-MM-DD) to NFC format (YYYYMMDD)
function convertDateToNFC(date) {
  return date.replace(/-/g, ""); // Remove hyphens
}

// Get the selected class from the query string
const urlParams = new URLSearchParams(window.location.search);
const selectedClass = urlParams.get("class");

// Set the class name in the title
document.getElementById("classTitle").textContent = `Leaderboard - Class ${selectedClass}`;

// Get leaderboard data for the selected class or fallback to an empty array
const leaderboardData = classData[selectedClass] || [];

// Populate the leaderboard table
const leaderboardTable = document.getElementById("leaderboardTable");

leaderboardData.forEach((student) => {
  const nfcDate = convertDateToNFC(student.date); // Convert date to NFC format
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${student.rank}</td>
    <td>${student.name}</td>
    <td>${student.studentId}</td>
    <td>${nfcDate}</td>
    <td>${student.correctRate}</td>
  `;
  leaderboardTable.appendChild(row);
});
