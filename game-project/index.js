const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('submit');
const guessField = document.getElementById('guessField');
const guess_counter = document.getElementById('guess_counter'); 
let guess = 0;
// const track_prev = document.getElementsById('track_prev');
let prev_guesses = [];

/* sand box*/
/* area to try and track previous guesses - mandy's sugg */
// let arrayOfLiContents = [];
// for ( let element of arrayOfLi ) {
//     console.log(element.innerText);
// 	arrayOfLiContents.push(element.innerText);
// }



/* random value generator */
var randNum=  Math.floor(Math.random() * 10) + 1;

/* reset function */
function resetGame() {
  randNum=  Math.floor(Math.random() * 10) + 1;
  guess = 0; 
  guess_counter.innerHTML = "Number of guesses: " + guess;
  prev_guesses = [];
  track_prev.innerHTML = "Previous Guesses: " + prev_guesses;
 
}

/* game mechanics */ 
myButton.addEventListener('click', () => {
  var x = guessField.value;

  if (x==randNum) {
    alert("Yay! You got it!");
    guess++;
    guess_counter.innerHTML = "Number of guesses: " + guess;
    resetGame();

  }
  else if (x> randNum) {
    guess++;
    guess_counter.innerHTML = "Number of guesses: " + guess;
    prev_guesses.push(x);
    track_prev.innerHTML = "Previous Guesses: " + prev_guesses;
    alert("Hm. Maybe try a smaller number?");

  } else if (x < randNum) {
    guess++;
    guess_counter.innerHTML = "Number of guesses: " + guess;
    prev_guesses.push(x);
    track_prev.innerHTML = "Previous Guesses: " + prev_guesses;
    alert("Perhaps a greater number?");

  } else {
    alert("Please enter a number between 0 and 10.");
  }
  guessField.value = "";
  guessField.focus();

});

