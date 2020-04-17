window.addEventListener("load", init);
// Global variables

// Available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1,
};
// to change level
const currentLevel = levels.hard;

let time = currentLevel;
let score = 0;
let isPlaying;

//Dom Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "joke",
  "developer",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "symptoms",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
];

// Initoalize Game
function init() {
  // show number of seconds  in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  //Start matching on word input
  wordInput.addEventListener("input", startMatch);
  // call countdown every second
  setInterval(countdown, 1000);
  // check the game status
  setInterval(checkStatus, 15);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);

    wordInput.value = "";
    score++;
  }
  // if score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}
// Match current word to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Corect";
    return true;
  } else {
    message.innerHTML = " ";
    return false;
  }
}
// pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}
// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement the time
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// check the game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
}
