"use strict";

let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  //when no input
  if (!guess) {
    // document.querySelector(`.message`).textContent = `no number`;
    displayMessage(`no number`);
    //when win
  } else if (guess === secretNumber) {
    displayMessage(`you win`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    //if guess is wrong
  } else if (guess !== secretNumber)
    if (score > 1) {
      // document.querySelector(`.message`).textContent =
      //   guess > secretNumber ? `too high` : `too low`;
      // score--;
      displayMessage(guess > secretNumber ? `too high` : `too low`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      // document.querySelector(`.message`).textContent = `you lose`;
      displayMessage(`you lose`);
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`body`).style.backgroundColor = `#FF0000`;
    }
});

// } else if (guess > secretNumber) {
//   if (score > 0) {
//     document.querySelector(`.message`).textContent = `too high`;
//     score--;

//     document.querySelector(`.score`).textContent = score;
//   } else {
//     document.querySelector(`.message`).textContent = `you lose`;
//   }

//   //when too low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector(`.message`).textContent = `too low`;
//     score--;
//     document.querySelector(`.score`).textContent = score;

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.guess`).value = ``;
  // document.querySelector(`.message`).textContent = `Start guessing...`;
  displayMessage(`Start guessing...`);
});
