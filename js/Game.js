/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0; 
        this.phrases = [
            "piece of cake",
            "zed is dead",
            "a dime a dozen",
            "donuts are good",
            "it is what it is",
        ];
        this.activePhrase = null;
    }

    startGame() {
        const overlay = document.querySelector("#overlay");
        overlay.style.display = "none";
        const randomPhrase = this.getRandomPhrase(); 
        const phrase = new Phrase(randomPhrase);
        this.activePhrase = phrase; // create a new phrase object and store it within the game object
        // phrase class methods can be called on game.activePhrase
        phrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        const chosen = this.phrases[Math.floor(Math.random() * (this.phrases.length))];
        return chosen;
    }

    handleInteraction(key) {
        if (this.activePhrase.checkLetter(key.textContent)) {
            this.activePhrase.showMatchedLetter(key.textContent);
            key.classList.add("chosen");
            if (this.checkForWin()){
                this.gameOver(true);
            }
        } else {
            if (!key.classList.contains("wrong")){
                key.classList.add("wrong");
                this.removeLife();
            } 
        }
        key.disabled = true;
    }

    removeLife() {
        if (this.missed >= 4) {
            this.gameOver(false);
        } else {
            const hearts = document.querySelectorAll(".tries img");
            for (let i = 0; i < hearts.length; i++) {
                if (hearts[i].src.includes("images/liveHeart.png")) {
                    hearts[i].parentNode.innerHTML = `<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">`;
                    this.missed++;
                    return;
                }
            }
        }

    }

    checkForWin() {
        const shown = document.getElementsByClassName("hide");
        if (shown.length === 0) {
            return true;
        } else { 
            return false;
        }
    }

    gameOver(bool) {
        const overlay = document.querySelector("#overlay");
        const heading = document.querySelector("#overlay h1");
        overlay.style.display = "block";
        if (bool) {
            heading.innerText = "You Won!"
            overlay.classList.remove("start");
            overlay.classList.remove("lose");
            overlay.classList.add("win");
        } else {
            heading.innerText = "You Lost! Try Again!"
            overlay.classList.remove("start");
            overlay.classList.remove("win");
            overlay.classList.add("lose");
        }
        this.resetGame();
    }

    resetGame() {
        const phrase = document.querySelector("#phrase ul");
        const allKeys = document.querySelectorAll(".key");
        const hearts = document.querySelectorAll(".tries img");
        
        // reanable all keys
        for (let i = 0; i < allKeys.length; i++){
            allKeys[i].className = "key";
            allKeys[i].disabled = false;
        }

        // clear last phrase
        phrase.innerHTML = "";

        // reset hearts
        for (let i = 0; i < hearts.length; i++) {
            if (hearts[i].src.includes("images/lostHeart.png")) {
                hearts[i].parentNode.innerHTML = `<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">`;
            }
        }
    }
}