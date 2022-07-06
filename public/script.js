"use strict";
const message = document.querySelector(".message");
const btn_check = document.querySelector(".btn-check");
const highscoreLabel = document.querySelector(".highscore");
const scoreLabel = document.querySelector(".score");
const actualScore = document.querySelector(".number");
const resetRandNum = document.querySelector(".again");
const body = document.querySelector("body");
const guessInp = document.querySelector(".guess");

const max = 20;
const min = 1;
let secretNumber = 0;
let highscore = 0;
let score = 20;

const rand = (min, max) => {
  const num = Math.trunc(Math.random() * max) + min;
  secretNumber = num;
};
const displayMessage = (msg) => {
  message.textContent = msg;
};

//Add Events
rand(min, max);

resetRandNum.addEventListener("click", () => {
  rand(min, max);
  score = 20;
  highscore = 0;
  scoreLabel.textContent = score;
  highscoreLabel.textContent = highscore;
  displayMessage("Start guessing...");
  body.classList.replace("bg-green-600", "bg-gray-800");
  guessInp.value = "";
  actualScore.textContent = "?";
});

btn_check.addEventListener("click", (e) => {
  e.preventDefault();
  const guess = Number(guessInp.value);
  console.log(guess);
  if (!guess) {
    message.textContent = "🛑 No Number";
  } else if (guess === secretNumber) {
    message.textContent = "🎉 You Won";
    scoreLabel.textContent = score;
    actualScore.textContent = secretNumber;
    body.classList.replace("bg-gray-800", "bg-green-600");
    if (score > highscore) {
      highscore = score;
      highscoreLabel.textContent = highscore;
    }
    console.log(score);
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? `📉 Too Low` : `📈 Too High`);
      score--;
      console.log(score);
      scoreLabel.textContent = score;
    } else {
      displayMessage("🎇 You Lost The Game");
      score = 0;
      scoreLabel.textContent = score;
      actualScore.textContent = secretNumber;
    }
  }
});
