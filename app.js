let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
  } else if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct. YOU WIN!`);
  } else {
    guessesLeft -= 1;
    if (guessesLeft > 0) {
      guessInput.value = '';
      setMessage(`${guess} is wrong, You have ${guessesLeft} guess left.`, 'red');
    } else {
      gameOver(false, `GAME OVER, YOU LOST! The correct number was ${winningNum}.`);
    }
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  guessInput.disabled = true;
  setMessage(msg, color)

  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

function setMessage(msg, color) {
  message.style.color = color;
  guessInput.style.borderColor = color;
  message.textContent = msg;
}