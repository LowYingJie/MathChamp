// leaderboard.js

// Get the selected class from the query string
const urlParams = new URLSearchParams(window.location.search);
const selectedClass = urlParams.get("class");

// Set the class name in the title
document.getElementById("classTitle").textContent = `Leaderboard - Class ${selectedClass}`;

// Unique leaderboard data for each class
const classData = {
  "1A": [
    { rank: 1, name: "Ahmad", correctRate: 95 },
    { rank: 2, name: "Lim Wei", correctRate: 90 },
    { rank: 3, name: "Kavitha", correctRate: 85 },
    { rank: 4, name: "Nurul", correctRate: 80 },
  ],
  "1B": [
    { rank: 1, name: "Hafiz", correctRate: 92 },
    { rank: 2, name: "Tan Jia", correctRate: 88 },
    { rank: 3, name: "Rajesh", correctRate: 84 },
    { rank: 4, name: "Aisyah", correctRate: 78 },
  ],
  "2A": [
    { rank: 1, name: "Amin", correctRate: 96 },
    { rank: 2, name: "Chong Li", correctRate: 92 },
    { rank: 3, name: "Preeti", correctRate: 89 },
    { rank: 4, name: "Farah", correctRate: 85 },
  ],
  "2B": [
    { rank: 1, name: "Hakim", correctRate: 94 },
    { rank: 2, name: "Ng Mei", correctRate: 89 },
    { rank: 3, name: "Anand", correctRate: 86 },
    { rank: 4, name: "Siti", correctRate: 82 },
  ],
  // Add more classes as needed
};

// Get leaderboard data for the selected class or fallback to an empty array
const leaderboardData = classData[selectedClass] || [];

// Populate the leaderboard table
const leaderboardTable = document.getElementById("leaderboardTable");

leaderboardData.forEach((student) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${student.rank}</td>
    <td>${student.name}</td>
    <td>${student.correctRate}</td>
  `;
  leaderboardTable.appendChild(row);
});
