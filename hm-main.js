
let numOfMisses = 0;
const maxMisses =7;
//let currentWord = null;
var wordToGuess = '';
var wordBank = ['apple', 'oatmeal', 'rice', 'kale', ];
var word = document.getElementById('blank-word');
//var letters = document.getElementById('start-button');
var letterInput = document.getElementById('letter');
/*var el = document.getElementById('submit');
el.innerHTML = wordsBank;*/
var currentWord = wordBank[ Math.floor(Math.random() * wordBank.length) ];

// start button is working; needs to pick random number and display underscore for that word
document.getElementById('new-game').onclick = function startGame() {
    var answerArray = [];
    var display ='';
      for (var i = 0; i < currentWord.length; i++){
        answerArray[i] = '_';
        display = display + '_';
      }
      document.getElementById('blank-word').innerHTML = display;
  //console.log(Object.values(answerArray));
}
document.getElementById('submit').onclick = function displayLetter(){
  console.log('hello');
  // needs to display transfer value from input to screen
}
