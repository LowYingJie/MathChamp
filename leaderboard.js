// Static data for demonstration
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
  "1C": [
    { rank: 1, name: "Shafiq Hadi", studentId: "51a3b78c", date: "2025-01-09", correctRate: 95 },
    { rank: 2, name: "Lee Jia Wei", studentId: "32c8a21f", date: "2025-01-09", correctRate: 90 },
    { rank: 3, name: "Arjun Kumar", studentId: "74b8d12c", date: "2025-01-09", correctRate: 87 },
    { rank: 4, name: "Zainab Fauzi", studentId: "92d87a12", date: "2025-01-09", correctRate: 84 },
  ],
  "1D": [
    { rank: 1, name: "Faiz Rahman", studentId: "25c9b13a", date: "2025-01-09", correctRate: 93 },
    { rank: 2, name: "Chong Wei Ling", studentId: "42d98c11", date: "2025-01-09", correctRate: 88 },
    { rank: 3, name: "Deepa Nair", studentId: "b12d97a8", date: "2025-01-09", correctRate: 85 },
    { rank: 4, name: "Siti Aisyah", studentId: "87d6b13c", date: "2025-01-09", correctRate: 82 },
  ],
  "2A": [
    { rank: 1, name: "Adam Faisal", studentId: "a1b2c3d4", date: "2025-01-09", correctRate: 97 },
    { rank: 2, name: "Lim Yong Kang", studentId: "e5f6g7h8", date: "2025-01-09", correctRate: 93 },
    { rank: 3, name: "Ravi Kumar", studentId: "i9j0k1l2", date: "2025-01-09", correctRate: 89 },
    { rank: 4, name: "Alya Nabila", studentId: "m3n4o5p6", date: "2025-01-09", correctRate: 86 },
  ],
  "2B": [
    { rank: 1, name: "Farid Iqbal", studentId: "85a6b7c8", date: "2025-01-09", correctRate: 96 },
    { rank: 2, name: "Tan Mei Ling", studentId: "61d2f3a4", date: "2025-01-09", correctRate: 91 },
    { rank: 3, name: "Manoj Patel", studentId: "32g4h5j6", date: "2025-01-09", correctRate: 88 },
    { rank: 4, name: "Syahirah Amin", studentId: "47i8k9l0", date: "2025-01-09", correctRate: 84 },
  ],
  "2C": [
    { rank: 1, name: "Aiman Hakim", studentId: "22a3b4c5", date: "2025-01-09", correctRate: 95 },
    { rank: 2, name: "Lee Xin Yi", studentId: "56d7f8g9", date: "2025-01-09", correctRate: 90 },
    { rank: 3, name: "Karthik Raj", studentId: "14h2i3j4", date: "2025-01-09", correctRate: 87 },
    { rank: 4, name: "Zarina Sofia", studentId: "78k5l6m7", date: "2025-01-09", correctRate: 83 },
  ],
  "2D": [
    { rank: 1, name: "Amirul Danish", studentId: "01b3c4d5", date: "2025-01-09", correctRate: 92 },
    { rank: 2, name: "Tan Wai Yee", studentId: "12e3f4g5", date: "2025-01-09", correctRate: 89 },
    { rank: 3, name: "Vijay Ramesh", studentId: "23h4i5j6", date: "2025-01-09", correctRate: 86 },
    { rank: 4, name: "Nur Amirah", studentId: "34k6l7m8", date: "2025-01-09", correctRate: 82 },
  ],
};

// Get the selected class from the query string
const urlParams = new URLSearchParams(window.location.search);
const selectedClass = urlParams.get("class");

// Set the class name in the title
document.getElementById("classTitle").textContent = `Leaderboard - Class ${selectedClass}`;
document.getElementById("backButton").addEventListener("click", () => {
  window.location.href = "homepage.html"; // Redirect to class selection page
});

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
