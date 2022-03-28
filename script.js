//global constants
const cluePauseTime = 333;
const nextClueWaitTime = 1000;
const sounds = [
  "sound1",
  "sound2",
  "sound3",
  "sound4",
  "sound5",
  "sound6",
  "sound7",
  "sound8",
];

//Global Variables
var time = 30;
var numButtons = 8;
var numStrikes = 3;
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var strikes = numStrikes;
var clueHoldTime = 1000;
var timer;
var elem = document.getElementById("clock");
var timeRunOut = false;
var remainingTime = time;
var gameWon = false;
var wrongGuess = false;
// Variable to track whether timer is running or not
var isStopped = true;
// Select Countdown container
const countContainer = document.getElementById("clock");

// function to display time
const renderTime = () => {
  // decement time
  remainingTime -= 1;
  // render count on the screen
  countContainer.innerHTML = remainingTime;
  // timeout on zero
  if (remainingTime === 0) {
    countContainer.innerHTML = remainingTime;
    isStopped = true;
    clearInterval(timer);
    remainingTime = time;
    strikes--;
    document.getElementById("numStrikes").innerHTML = strikes;
    if (strikes == 0) {
      setTimeout(loseGame, 100);
    } else {
      wrongGuess = true;
      setTimeout(alert("You ran out of time!"), 1000);
      guessCounter = 0;
      playClueSequence();
    }
  }
};

// Function to start Timer
const startTimer = () => {
  if (isStopped && gamePlaying) {
    isStopped = false;
    countContainer.innerHTML = remainingTime;
    timer = setInterval(renderTime, 1000);
  }
};

// Function to stop Timer
const stopTimer = () => {
  isStopped = true;
  if (timer) {
    clearInterval(timer);
  }
};

// Function to reset Timer
const resetTimer = () => {
  isStopped = true;
  clearInterval(timer);
  remainingTime = time;
  countContainer.innerHTML = remainingTime;
};

function modify() {
  stopGame();
  time = prompt(
    "Please enter the number of seconds you want to have to make your guess. (Range from 5 - 9999)"
  );
  while (!(time >= 5 && time <= 9999)) {
    time = prompt("Please enter a valid number! (Range from 5 - 9999)");
  }
  numButtons = prompt(
    "Please enter the number of buttons you want to play with. (Range from 1 - 8)"
  );
  while (!(numButtons >= 1 && numButtons <= 8)) {
    numButtons = prompt("Please enter a valid number! (Range from 1 - 8)");
  }
  numStrikes = prompt(
    "Please enter the number of tries you have before you lose the game. (Range from 1 - 9999)"
  );
  while (!(numStrikes >= 1 && numStrikes <= 9999)) {
    numStrikes = prompt("Please enter a valid number! (Range from 1 - 9999)");
  }
  generateButtons();
  document.getElementById("numStrikes").innerHTML = numStrikes;
  countContainer.innerHTML = time;
}

function generateButtons() {
  clearButtons();
  for (let i = 1; i <= numButtons; i++) {
    var btn = document.createElement("button");
    btn.id = "button" + i;
    btn.setAttribute("onclick", `guess(${i})`);
    btn.setAttribute("onmousedown", `playSound(${i - 1})`);
    btn.setAttribute("onmouseup", `pauseSound(${i - 1})`);
    document.getElementById("gameButtonArea").appendChild(btn);
  }
}

function clearButtons() {
  const arr = document.getElementById("gameButtonArea");
  while (arr.lastElementChild) {
    arr.removeChild(arr.lastElementChild);
  }
}

//initialize game 
generateButtons();
document.getElementById("numStrikes").innerHTML = strikes;
countContainer.innerHTML = remainingTime;

function randomizePattern() {
  //using 8 for 8 rounds
  for (let i = 0; i < 8; i++) {
    pattern[i] = Math.floor(Math.random() * numButtons + 1);
  }
}

function startGame() {
  //initialize game variables
  clueHoldTime = 1000;
  strikes = numStrikes;
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("highscore").style.display = "none";
  document.getElementById("score").style.display = "none";
  document.getElementById("numStrikes").innerHTML = strikes;
  countContainer.innerHTML = remainingTime;
  randomizePattern();
  playClueSequence();
}

function stopGame() {
  strikes = numStrikes;
  document.getElementById("numStrikes").innerHTML = strikes;
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  resetTimer();
  stopTimer();
}

function playSound(s) {
  var elem = document.getElementById(sounds[s]);
  elem.play();
  setTimeout(pauseSound, 2000, s);
}

function pauseSound(s) {
  var elem = document.getElementById(sounds[s]);
  elem.pause();
  elem.currentTime = 0;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playSound(btn - 1);
    setTimeout(pauseSound, clueHoldTime, btn - 1);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  if (!gameWon) {
    clueHoldTime -= 75;
  } else if (gameWon && !wrongGuess) {
    pattern.push(Math.floor(Math.random() * numButtons + 1));
  }
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    delay -= 150;
  }
  setTimeout(startTimer, delay - 500);
}

function loseGame() {
  stopGame();
  if (!gameWon) {
    alert("Game Over. You lost.");
  } else {
    alert("Game Over. Your highest score is: " + (pattern.length - 1));
    gameWon = false;
  }
}

function winGame() {
  gameWon = true;
  if (
    confirm(
      "Game Over. You won! Press OK to continue for a high score. Press cancel to restart!"
    )
  ) {
    document.getElementById("highscore").style.display = "flex";
    document.getElementById("score").style.display = "contents";
    progress++;
    playClueSequence();
  } else {
    stopGame();
  }
}

function guess(btn) {
  wrongGuess = false;
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  // add game logic here
  if (btn == pattern[guessCounter]) {
    //correct guess
    if (guessCounter == progress) {
      if (progress == pattern.length - 1 && !gameWon) {
        setTimeout(winGame, 100);
      } else {
        resetTimer();
        progress++;
        document.getElementById("score").innerHTML = " " + pattern.length;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    strikes--;
    if (strikes == 0) {
      setTimeout(loseGame, 100);
    } else {
      wrongGuess = true;
      confirm("Incorrect guess, listen carefully and try again!");
      resetTimer();
      document.getElementById("numStrikes").innerHTML = strikes;
      guessCounter = 0;
      playClueSequence();
    }
  }
}
