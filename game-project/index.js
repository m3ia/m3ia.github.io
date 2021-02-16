const myHeading = document.getElementById('myHeading');
const submit = document.getElementById('submit');
const guessField = document.getElementById('guessField');
const guess_counter = document.getElementById('guess_counter');
let guess = 0;

// const track_prev = document.getElementsById('track_prev');
let prev_guesses = [];
const easyButton = document.getElementById('easyButton');
const medButton = document.getElementById('medButton');
const hardButton = document.getElementById('hardButton');

let randNumRange = [1, 10];
let diff = 0;
let randNum = Math.floor(Math.random() * diff) +1;

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
  randNum = Math.floor(Math.random() * diff) + 1;
  guess = 0;
  guess_counter.innerHTML = "Number of guesses: " + guess;
  prev_guesses = [];
  track_prev.innerHTML = "Previous Guesses: " + prev_guesses.toString();

}

/* user guess function */
submit.addEventListener('click', () => {
  var x = guessField.value;

  if (x == randNum) {
    alert("Yay! You got it!");
    guess++;
    guess_counter.innerHTML = "Number of guesses: " + guess;
    prev_guesses.push(x);
    track_prev.innerHTML = "Previous Guesses: " + prev_guesses.toString();
    resetGame();

  } else if (x > randNum && x < randNumRange[1]) {
    guess++;
    guess_counter.innerHTML = "Number of guesses: " + guess;
    prev_guesses.push(x);
    track_prev.innerHTML = "Previous Guesses: " + prev_guesses.toString();
    alert("Hm. Maybe try a smaller number?");

  } else if (x < randNum && x > randNumRange[0]) {
    guess++;
    guess_counter.innerHTML = "Number of guesses: " + guess;
    prev_guesses.push(x);
    track_prev.innerHTML = "Previous Guesses: " + prev_guesses.toString();
    alert("Perhaps a greater number?");

  } else {
    alert( `Please enter a number between 1 and ${randNumRange[1]}.`);
  }
  guessField.value = "";
  guessField.focus();

});

