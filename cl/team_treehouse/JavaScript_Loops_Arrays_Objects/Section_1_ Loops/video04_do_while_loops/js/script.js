var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

do {
  guess = prompt('I am thinking of a number between 1 and 10. What is the number?');
  guessCount += 1;
  if ( parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
} while ( ! correctGuess )

document.write('<h1>You Guessed the Number!</h1>');
document.write('It toolk you ' + guessCount + ' tries to guess the number  ' + randomNumber);
