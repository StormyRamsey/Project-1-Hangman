
var numOfMisses = 0;
const maxMisses =7;
var wordBank = ['apple', 'oatmeal', 'rice', 'kale'];
var word = document.getElementById('text');
var letterInput = document.getElementById('letter');
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
//-Current Function in progess-
$('#submit').on('click', function() {
    lettersGuessed.push($('#letter').val())
    displayLetters()

})



$('#new-game').on('click', startGame)
