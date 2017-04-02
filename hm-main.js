
let numOfMisses = 0;
const maxMisses =7;
let currentWord = null;
var guess = [];
var wordBank = ['apple', 'oatmeal', 'rice', 'kale', 'spinach', 'carrots'];
var word = document.getElementById('blank-word')

// start button is working; needs to pick random number and display underscore for that word
document.getElementById('new-game').onclick = function startGame() {
          var placeholder = '',
          abc = ['A','B','C','D','E','F','G','H','I','J','K','L',
                'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
          numOfMisses = 0;
          wordToGuess = getWord();
          wordLength = wordToGuess.length;

          for (var i = 0; i < wordLength; i++) {
            placeholder += '_';
            }
          word.innerHTML = placeholder;
}
function getWord() {

  return currentWord = wordBank[ Math.floor(Math.random() * wordBank.length) ];
}
//currentWord = wordBank[ Math.floor(Math.random() * wordBank.length) ];

//-----------------------------------------------------
//function displayLetter() {}
  /*var placeholder = '',
    for (var i=0; i < wordBank; i++) {
       placeholder += '_';
    }
word.innerHTML = placeholder; */


//document.getElementById('blank-word').innerHTML = displayLetter();


//----------------------------------------------------
//function guessLetter() {}

//----------------------------------------------------
//function usersGuess() {}
