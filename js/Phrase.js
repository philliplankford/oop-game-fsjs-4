/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const phraseDiv = document.querySelector("#phrase ul");
        const phraseArr = this.phrase.split('');
        phraseArr.forEach( letter => {
            let letterLI = document.createElement('li');
            letterLI.textContent = `${letter}`;
            if (letter === " ") {
                letterLI.className = "space";
            } else {
                letterLI.className = `hide letter ${letter}`;
            }
            phraseDiv.appendChild(letterLI);
        });
    }

    checkLetter(letter) {
        const phraseChosen = game.activePhrase.phrase;
        return phraseChosen.includes(letter);
    }
    
    showMatchedLetter(letter) {
        const matches = document.getElementsByClassName(`${letter}`); // gets all revealed class names by their letter
        for (let i = 0; i < matches.length; i++) {
            matches[i].classList.remove("hide");
            matches[i].classList.add("show");
        }
    }
}