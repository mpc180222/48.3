function guessingGame() {
    let numTries = 0;
    let correctGuess = Math.floor(Math.random()*99);
    let won = false;
    console.log(correctGuess);
    return function gameFn(guess){
        numTries ++;
        if(won === true) return 'The game is over, you already won!'
        if(guess < correctGuess){
             return `${guess} is too low`}
        if(guess > correctGuess) return `${guess} is too high`;
        if(guess === correctGuess){
            won = true;
            return `You win, found ${guess} in ${numTries} tries`;}

    }

}

module.exports = { guessingGame };
