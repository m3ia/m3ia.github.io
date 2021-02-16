const myHeading = document.getElementById('myHeading');

// guessing vars 
const submit = document.getElementById('submit');
const guessField = document.getElementById('guessField');
const guess_counter = document.getElementById('guess_counter');
let guess = 0;
let prev_guesses = [];

// vars for setting difficulty
const easyButton = document.getElementById('easyButton');
const medButton = document.getElementById('medButton');
const hardButton = document.getElementById('hardButton');

// vars for random number, range
let randNumRange = [1, 10];
let diff = 0;
let randNum = Math.floor(Math.random() * diff) +1;

// vars for user score
let score = 0;
const userScore = document.getElementById('userScore');


/* set difficulty */
easyButton.addEventListener('click', ()=> {
  randNumRange = [1, 10];
  diff = 10;
  resetGame();
});

medButton.addEventListener('click', () => {
  randNumRange = [1, 100];
  diff = 100;
  resetGame();
});

hardButton.addEventListener('click', () => {
  randNumRange = [1,1000];
  diff = 1000;
  resetGame();
});

/* reset function */
function resetGame() {
  guessField.value = "";
  guessField.focus();
  guess = 0;
  prev_guesses = [];
}

/* user guess function */
submit.addEventListener('click', () => {
  var x = guessField.value;

  if (x == randNum) {
    alert(`Yay! You got it!`);
    guess++;
    prev_guesses.push(x);
    score++;
    resetGame();

  } else if (x > randNum && x < randNumRange[1]+1) {
    guess++;
    prev_guesses.push(x);
    alert(`Hm. Maybe try a smaller number?`);

  } else if (x < randNum && x > 0) {
    guess++;
    prev_guesses.push(x);
    alert(`Perhaps a greater number?`);

  } else {
    alert( `Please enter a number between 1 and ${randNumRange[1]}.`);
  }
  guessField.value = "";
  guessField.focus();

  guess_counter.innerHTML = `Number of guesses: ${guess}`;
  track_prev.innerHTML = `Previous Guesses: ${prev_guesses}`;
  userScore.innerHTML = `User Score: ${score}`;
});

