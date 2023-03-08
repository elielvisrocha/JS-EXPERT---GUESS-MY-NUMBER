'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = +document.querySelector('.guess').value;
    console.log(guess, typeof guess);

    if (!guess) {
        console.log("error");
        displayMessage("You didn't type a number.")
    } else if (guess === secretNumber) {
        displayMessage("Correct number!");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }


    } else if (guess !== secretNumber) {

        if (score > 1) {
            displayMessage(guess > secretNumber ? "Too high!" : "Too low!!");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage("You lost the game!!!");
            document.querySelector('.score').textContent = 0;
        }

    }
});




// RESTART THE GAME;


document.querySelector(".again").addEventListener("click", () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    displayMessage("Start guessing...");
    +(document.querySelector('.guess').value = "");
    score = 20;
    document.querySelector('.score').textContent = score;
})