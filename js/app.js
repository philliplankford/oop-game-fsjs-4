/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//const test = new Game();

// const game = new Game(); 
// const randomPhrase = game.getRandomPhrase(); 
// const phrase = new Phrase(randomPhrase);
// phrase.addPhraseToDisplay();

const startButton = document.querySelector("#btn__reset");
const keyboard = document.querySelector("#qwerty");
let game = "";

startButton.addEventListener("click", () => {
    game = new Game(); 
    game.startGame();
})

keyboard.addEventListener("click", (e) => {
    if (e.target.className === "key") {
        console.log(e.target.textContent);
        game.handleInteraction(e.target);
    }
})

// keyboard.addEventListener("keyUp")