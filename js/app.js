/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startButton = document.querySelector("#btn__reset");
const keyboard = document.querySelector("#qwerty");
let game = "";

startButton.addEventListener("click", () => {
    game = new Game(); 
    game.startGame();
})

keyboard.addEventListener("click", (e) => {
    if (e.target.className === "key") {
        game.handleInteraction(e.target);
    }
})

document.addEventListener("keydown", (e) => {
    const overlay = document.querySelector("#overlay");
    if (overlay.style.display === "none") {
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
    }   
})