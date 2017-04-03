
let numOfMisses = 0;
const maxMisses =7;
let currentWord = null;
var guess = [];
var wordToGuess;
var wordBank = ['apple', 'oatmeal', 'rice', 'kale', ];
var word = document.getElementById('blank-word');
var letters = document.getElementById('start-button');
var letterInput = document.getElementById('letter-input');
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
      function getWord(word) {
        return currentWord = wordBank[ Math.floor(Math.random() * wordBank.length) ];
}//----------------------------------------------------
 document.getElementById('submit-letter').onclick = function displayBlankWord(word,letter){
   var display ='';
    for(var i=0; i < wordBank.length; i++){
      display = display + '_';
    }
    console.log(letterInput.value)

  function isLetterInWord(word,letter){
      if(word.search(letter) != -1){

      } else {
        console.log(false);
      }

    }
 }

//----------------------------------------------------
//function usersGuess() {}
