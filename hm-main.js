
var numOfMisses = 0;
var maxMisses = 6;
var wordBank = ['apple', 'oatmeal', 'rice', 'kale'];
var word = document.getElementById('text');
var letterInput = $('#letter');
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
   return lettersDisplayed.join('')
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
    //if (lettersDisplayed.includes(!== ' _ '))
    if (currentWord.includes(input)) {
      $('#alert-box1').text('Good Guess!')
    } else {
      numMissed += 1
      $('#alert-box1').text('Try Again!')
    }
  }

  })

$('#new-game').on('click', startGame)
