
var numOfMisses = 0;
var maxMisses = 6;
var wordBank = ['apple', 'oatmeal', 'rice', 'kale', 'orange', 'banana', 'peach', 'pear', 'cucumber', 'melon', 'watermelon', 'spinach', 'onion', 'parsley', 'broccoli'];
var word = document.getElementById('text');
var letterInput = $('#letter');
var currentWord = null;
var currentLetters = null
var lettersGuessed = []

// This function starts the game by pulling a random word from the wordBank array and calling the displayLetters function.
function startGame() {
  currentWord = wordBank[ Math.floor(Math.random() * wordBank.length) ]
  currentLetters = currentWord.split('')
  displayLetters()
}
// The displayLetters function maps the letter that was guessed
// into the lettersGuessed array and if the letter is correct the letter will display.
// If not the function will display an underscore.
function displayLetters() {
  let lettersDisplayed = currentLetters.map((letter) => {
    if(lettersGuessed.includes(letter)) {
      return letter
    } else {
      return ' _ '
    }
  })

$('#text').text(lettersDisplayed.join(' '))
   return lettersDisplayed.join(' ')
}

$('#submit').on('click', function(letter) {
  let numMissed = 0;
  if ( numMissed >= maxMisses){
      ('#alert-box1').text('Sorry, You Lose!')
    } else {
    let input = letterInput.val()
    letterInput.val('')
    lettersGuessed.push(input)

    let lettersDisplayed = displayLetters()
    if (currentWord.includes(input)) {
      $('#alert-box1').text('Good Guess!')
    } else {
      $('#alert-box1').text('Try Again!')
      }
    }
  })

$('#new-game').on('click', startGame)
