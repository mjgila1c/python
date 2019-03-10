
var upper = 10000; //upper limit the computer can guessed
var randomNumber = getRandomNumber(upper); // generate a number from 1-10000
var guess; // holds the number of computer guesses
var attempts = 0; // holds the number of attempts

// funtion generates the original random number and each of the computer's "guesses"
function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

//loop conditon to continue while the guess and randomNumber dont match. guess will be compared to the original random number. Also tracks the number of guesses
while ( guess !== randomNumber ) {
  guess = getRandomNumber(upper);
  attempts += 1;
}

document.write("<p>The random number was: " + randomNumber + "</p>");
document.write("<p>It took the computer " + attempts + "attmpts to get it right</p>");
