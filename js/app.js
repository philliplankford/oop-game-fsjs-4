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

document.addEventListener("keydown", (e) => {
    const keys = document.querySelectorAll(".key");
    const key = e.key;
    let element = "";
    if(/^[a-z]+$/ig.test(key)){
        for (let i = 0; i < keys.length; i++){
            if (keys[i].textContent === key) {
            element = keys[i];
            }
        }
        game.handleInteraction(element);
    }
})