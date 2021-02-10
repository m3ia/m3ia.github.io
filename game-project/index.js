const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('submit');
const guessField = document.getElementById('guessField');
const guess_counter = document.getElementById('guess_counter'); 
let guess = 0;

// const trackPrev = document.gotElementById('track_prev');
// let prev = "";

// document.gotElementById("track_prev").innerHTML = "Previous guesses: " + prev;


// random value generated 
var randNum=  Math.floor(Math.random() * 10) + 1;

function resetGame() {
  randNum=  Math.floor(Math.random() * 10) + 1;
  guess = 0; 
  document.getElementById("guess_counter").innerHTML = "Number of guesses: " + guess;
 
}


myButton.addEventListener('click', () => {
  var x = guessField.value;

  if (x==randNum) {
    alert("Yay! You got it!");
    guess++;
    document.getElementById("guess_counter").innerHTML = "Number of guesses: " + guess;
    resetGame();

  }
  else if (x> randNum) {
    guess++;
    document.getElementById("guess_counter").innerHTML = "Number of guesses: " + guess;
    alert("Hm. Maybe try a smaller number?");

  } else if (x < randNum) {
    guess++;
    document.getElementById("guess_counter").innerHTML = "Number of guesses: " + guess;
    alert("Perhaps a greater number?");

  } else {
    alert("Please enter a number between 0 and 10.");
  }
  guessField.value = "";
  guessField.focus();

});

