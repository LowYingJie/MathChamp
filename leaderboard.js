// leaderboard.js

// Get the selected class from the query string
const urlParams = new URLSearchParams(window.location.search);
const selectedClass = urlParams.get("class");

// Set the class name in the title
document.getElementById("classTitle").textContent = `Leaderboard - Class ${selectedClass}`;

// Mock leaderboard data
const mockData = [
  { rank: 1, name: "Siti", correctRate: 95 },
  { rank: 2, name: "Ali", correctRate: 90 },
  { rank: 3, name: "Xiao Mei", correctRate: 85 },
  { rank: 4, name: "Viveka", correctRate: 80 },
];

// Populate the leaderboard table
const leaderboardTable = document.getElementById("leaderboardTable");

mockData.forEach((student) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${student.rank}</td>
    <td>${student.name}</td>
    <td>${student.correctRate}</td>
  `;
  leaderboardTable.appendChild(row);
});
