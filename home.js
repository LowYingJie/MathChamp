import { db } from "./firebase.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const leaderboardTable = document.getElementById("leaderboard");

// Reference to the players data in Firebase
const playersRef = ref(db, "players");

onValue(playersRef, (snapshot) => {
  const players = snapshot.val();
  const playerArray = Object.keys(players).map((key) => ({
    name: players[key].name,
    mark: players[key].score,
  }));

  // Sort players by mark in descending order
  playerArray.sort((a, b) => b.mark - a.mark);

  // Update the leaderboard table
  leaderboardTable.innerHTML = playerArray
    .map((player, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${player.name}</td>
        <td>${player.mark}</td>
      </tr>
    `)
    .join("");
});
