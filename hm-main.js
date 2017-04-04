
var numOfMisses = 0;
const maxMisses =7;
//let currentWord = null;
var wordBank = ['apple', 'oatmeal', 'rice', 'kale'];
var word = document.getElementById('text');
//var letters = document.getElementById('start-button');
var letterInput = document.getElementById('letter');
/*var el = document.getElementById('submit');
el.innerHTML = wordsBank;*/
var currentWord = null;
var currentLetters = null
var lettersGuessed = []


function startGame() {
  currentWord = wordBank[ Math.floor(Math.random() * wordBank.length) ]
  currentLetters = currentWord.split('')
  displayLetters()
}

function displayLetters() {
  let lettersDisplayed = currentLetters.map((letter) => {
    if(lettersGuessed.includes(letter)) {
      return letter
    } else {
      return ' _ '
    }
  })
  $('#text').text(lettersDisplayed.join(''))
}



$('#new-game').on('click', startGame)
