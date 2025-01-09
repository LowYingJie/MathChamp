// Static data for demonstration
const classData = {
  "2A": [
    { rank: 1, name: "Ahmad Faris", studentId: "85c54b03", date: "2025-01-12", correctRate: 96 },
    { rank: 2, name: "Lim Wei Jun", studentId: "62f8a92c", date: "2025-01-12", correctRate: 92 },
    { rank: 3, name: "Preethi Raj", studentId: "94b7d12f", date: "2025-01-12", correctRate: 89 },
    { rank: 4, name: "Aisyah Zainab", studentId: "29a3c65d", date: "2025-01-12", correctRate: 85 },
  ],
  "2B": [
    { rank: 1, name: "Hakim Roslan", studentId: "77d92c11", date: "2025-01-12", correctRate: 94 },
    { rank: 2, name: "Tan Hui Min", studentId: "a92d78bc", date: "2025-01-12", correctRate: 91 },
    { rank: 3, name: "Kavitha Rani", studentId: "b8d97d12", date: "2025-01-12", correctRate: 88 },
    { rank: 4, name: "Nurul Ain", studentId: "cd9f82ba", date: "2025-01-12", correctRate: 83 },
  ],
  "3A": [
    { rank: 1, name: "Shafiq Hadi", studentId: "51a3b78c", date: "2025-01-12", correctRate: 95 },
    { rank: 2, name: "Lee Jia Wei", studentId: "32c8a21f", date: "2025-01-12", correctRate: 90 },
    { rank: 3, name: "Arjun Kumar", studentId: "74b8d12c", date: "2025-01-12", correctRate: 87 },
    { rank: 4, name: "Zainab Fauzi", studentId: "92d87a12", date: "2025-01-12", correctRate: 84 },
  ],
  "3B": [
    { rank: 1, name: "Faiz Rahman", studentId: "25c9b13a", date: "2025-01-12", correctRate: 93 },
    { rank: 2, name: "Chong Wei Ling", studentId: "42d98c11", date: "2025-01-12", correctRate: 88 },
    { rank: 3, name: "Deepa Nair", studentId: "b12d97a8", date: "2025-01-12", correctRate: 85 },
    { rank: 4, name: "Siti Aisyah", studentId: "87d6b13c", date: "2025-01-12", correctRate: 82 },
  ],
};

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
