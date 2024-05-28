'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log();
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  // When no number
  if (!guess) {
    // document.querySelector('.message').textContent = 'NO Number 🤢';
    displayMessage('NO Number 🤢');
    // When guess is correct
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Corecct Number!!...🎉🎁';
    displayMessage('Corecct Number!!...🎉🎁');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High!!!' : 'Too Low!!!';
      displayMessage(guess > secretNumber ? 'Too High!!!' : 'Too Low!!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You loose the GAME!!!';
      displayMessage('You loose the GAME!!!');
      document.querySelector('.score').textContent = 0;
    }
  }

  
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
