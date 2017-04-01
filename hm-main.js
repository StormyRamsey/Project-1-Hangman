var wordBank = ['apple', 'orange', 'peanut'];



// start button is working; needs to show random number and underscore
document.getElementById('new-game').onclick = function startGame() {

        var word = 'abcd123456';
        var wordLength = word.length;
        var underscores = '';
    for(i=0; i<wordLength; i++) {
        underscores = underscores + '_'
      }
document.getElementById('random-words').innerHTML = wordBank[0];
};
