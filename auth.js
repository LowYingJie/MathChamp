import { db } from "./firebase.js";
import { ref, set } from "firebase/database";

export function registerPlayer(playerId, name) {
  set(ref(db, `players/${playerId}`), {
    name: name,
    score: 0,
    current_position: 0
  });
}
