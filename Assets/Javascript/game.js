var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ranLet, guessesRemaining, guessedLetters;
// Declares the tallies to 0
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var guessedLetters = "Pick a letter to start";
// resets these variables
var theWorks = function() {
        ranLet = letters[Math.floor(Math.random() * letters.length)];
        guessesRemaining = 9;
        guessedLetters = [];
        // What number did the computer pick?
        console.log("The letter is: " + ranLet);
    }
    // Records wins, losses, and guesses
var record = function() {
    //// Taking the tallies and displaying them in HTML
    var html = "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Remaining: " + guessesRemaining + "</p>" + "<p>Your Guesses: " + guessedLetters + "</p>"

    //// Placing the html into the game ID
    document.getElementById('game').innerHTML = html;
};

record();
theWorks();
//Reacts to keystrokes
document.onkeyup = function(event) {
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var validGuess = false
    for (var i = 0; i < letters.length; i++) {
        //Checks to see if what the player typed is a valid letter
        if (playerGuess == letters[i]) {
            validGuess = true
        }
    }
    if (!validGuess) {
        alert("Please select a real letter!")
        return;
    }
    //Pushes letters guessed to guessed field
    guessedLetters.push(playerGuess);
    //Compares answers
    if (playerGuess == ranLet) {
        document.getElementById('dingdingding').play();
        alert('Correct! The letter was ' + ranLet );
        wins++;
        theWorks();
    } else if (guessesRemaining == 0) {
        document.getElementById('buzzer').play();
        alert('Too bad, you lose ... The letter was ' + ranLet);
        losses++;
        theWorks();
    }

    guessesRemaining--;


    record();
}

document.getElementById('openKeyboard').addEventListener('click', function(){
    var inputElement = document.getElementById('hiddenInput');
    inputElement.style.visibility = 'visible'; // unhide the input
    inputElement.focus(); // focus on it so keyboard pops
    inputElement.style.visibility = 'hidden'; // hide it again
});
