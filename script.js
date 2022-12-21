// Set up the game state
const word = "hangman";
let remainingGuesses = 6;
let revealedWord = "";
for (let i = 0; i < word.length; i++) {
   revealedWord += "_";
}
let wrongGuesses = [];

// Update the page with the initial game state
document.getElementById("word").innerHTML = revealedWord;
document.getElementById("guesses-remaining").innerHTML = `Guesses remaining: ${remainingGuesses}`;
document.getElementById("wrong-guesses").innerHTML = `Wrong guesses: ${wrongGuesses.join(", ")}`;

// Handle the player's guess
document.getElementById("guess-form").addEventListener("submit", (event) => {
   event.preventDefault();

   // Get the player's guess
   const guess = document.getElementById("guess-input").value;

   // Check if the letter is in the word
   let correctGuess = false;
   for (let i = 0; i < word.length; i++) {
      if (word[i] == guess) {
         revealedWord = revealedWord.substr(0, i) + guess + revealedWord.substr(i + 1);
         correctGuess = true;
      }
   }

   // Update the game state based on the guess
   if (!correctGuess) {
      remainingGuesses--;
      wrongGuesses.push(guess);
   }

   // Check if the player has won or lost the game
   let gameWon = false;
   let gameLost = false;
   if (revealedWord == word) {
      gameWon = true;
   }
   if (remainingGuesses == 0) {
      gameLost = true;
   }

   // Update the page with the current game state
   document.getElementById("word").innerHTML = revealedWord;
   document.getElementById("guesses-remaining").innerHTML = `Guesses remaining: ${remainingGuesses}`;
   document.getElementById("wrong-guesses").innerHTML = `Wrong guesses: ${wrongGuesses.join(", ")}`;
   if (gameWon) {
      document.getElementById("scaffold").innerHTML = "You won!";
   }
   if (gameLost) {
      document.getElementById("scaffold").innerHTML = "You lost.";
   }
});
