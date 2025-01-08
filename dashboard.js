import { db } from "./firebaseConfig.js";
import { ref, onValue } from "firebase/database";

const playerRef = ref(db, "/players");

onValue(playerRef, (snapshot) => {
  const players = snapshot.val();
  const tableBody = document.querySelector("#playerTable tbody");
  tableBody.innerHTML = "";

  for (let uid in players) {
    const player = players[uid];
    const row = `<tr><td>${uid}</td><td>${player.score}</td></tr>`;
    tableBody.innerHTML += row;
  }
});
