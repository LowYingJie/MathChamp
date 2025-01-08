// Import necessary Firebase functions
import { getDatabase, ref, onValue, set, update } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCXXHqcCV9kaP7wBVExaqmRv1Fe78X_cx8",
  authDomain: "mathchamp-b30de.firebaseapp.com",
  databaseURL: "https://mathchamp-b30de-default-rtdb.firebaseio.com/",
  projectId: "mathchamp-b30de",
  storageBucket: "mathchamp-b30de.appspot.com",
  messagingSenderId: "668143144572",
  appId: "1:668143144572:web:43f530212a54f1402383f9",
  measurementId: "G-1SF82Y837L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Listen for player updates
function initializeGameListeners() {
  const playersRef = ref(db, 'players');
  
  onValue(playersRef, (snapshot) => {
    const players = snapshot.val();
    if (players) {
      updateGameBoard(players);
    }
  });
}

// Update player position
function updatePlayerPosition(playerID, position, score) {
  const playerRef = ref(db, `players/${playerID}`);
  update(playerRef, {
    current_position: position,
    score: score,
    last_updated: Date.now()
  });
}

// Register new player
function registerNewPlayer(nfcID) {
  const playerRef = ref(db, `players/${nfcID}`);
  set(playerRef, {
    name: `Player_${nfcID}`,
    current_position: 0,
    score: 0,
    registration_date: Date.now(),
    last_active: Date.now()
  });
}

// Handle game moves
function handleGameMove(playerID, diceRoll, isCorrectAnswer) {
  const playerRef = ref(db, `players/${playerID}`);
  
  onValue(playerRef, (snapshot) => {
    const playerData = snapshot.val();
    if (playerData) {
      let newPosition = playerData.current_position;
      let newScore = playerData.score;
      
      if (isCorrectAnswer) {
        newPosition = Math.min(64, newPosition + diceRoll);
        newScore += 10;
      } else {
        newPosition = Math.max(0, newPosition - diceRoll);
      }
      
      updatePlayerPosition(playerID, newPosition, newScore);
    }
  }, {
    onlyOnce: true
  });
}

// Export functions
export {
  initializeGameListeners,
  updatePlayerPosition,
  registerNewPlayer,
  handleGameMove
};
