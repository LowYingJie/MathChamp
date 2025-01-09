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
  "3A": [
    { rank: 1, name: "Ali", correctRate: 93 },
    { rank: 2, name: "Lee Ching", correctRate: 89 },
    { rank: 3, name: "Subash", correctRate: 86 },
    { rank: 4, name: "Zainab", correctRate: 83 },
  ],
  "3B": [
    { rank: 1, name: "Faiz", correctRate: 92 },
    { rank: 2, name: "Wong Kai", correctRate: 88 },
    { rank: 3, name: "Manoj", correctRate: 84 },
    { rank: 4, name: "Amirah", correctRate: 81 },
  ],
  "4A": [
    { rank: 1, name: "Shafiq", correctRate: 95 },
    { rank: 2, name: "Chen Wei", correctRate: 91 },
    { rank: 3, name: "Deepa", correctRate: 88 },
    { rank: 4, name: "Hidayah", correctRate: 84 },
  ],
  "4B": [
    { rank: 1, name: "Zul", correctRate: 93 },
    { rank: 2, name: "Teoh Min", correctRate: 90 },
    { rank: 3, name: "Ganesh", correctRate: 87 },
    { rank: 4, name: "Laila", correctRate: 82 },
  ],
  "5A": [
    { rank: 1, name: "Rahim", correctRate: 97 },
    { rank: 2, name: "Tan Hui", correctRate: 94 },
    { rank: 3, name: "Arjun", correctRate: 91 },
    { rank: 4, name: "Nadira", correctRate: 88 },
  ],
  "5B": [
    { rank: 1, name: "Aziz", correctRate: 96 },
    { rank: 2, name: "Lim Chee", correctRate: 92 },
    { rank: 3, name: "Kumar", correctRate: 89 },
    { rank: 4, name: "Suhaila", correctRate: 86 },
  ],
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
