
let numOfMisses = 0;
const maxMisses =7;
let currentWord = null;
let guesses = [];
var wordBank = ['apple', 'orange', 'peanut', 'jelly', 'oatmeal', 'rice', 'kale'];


// start button is working; needs to pick random number and display underscore for that word
document.getElementById('new-game').onclick = function startGame() {
          currentWord = wordBank[ Math.floor(Math.random() * wordBank.length) ];
          console.log('hello world!');

      displayLetter();
}
/* At this point when I click the start button I can see the first word
 in the array's index an the underscores don't have space betwen each letter. */
