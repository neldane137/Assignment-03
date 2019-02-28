/*eslint-env browser*/

function gameRPS() {
    "use strict";
    var playerChoice, choices, randomNumber, computerChoice, bothChoices;
    playerChoice = window.prompt("Let's play ROCK, PAPER, SCISSORS. Make your choice.").toLowerCase();
    choices = ["rock", "paper", "scissors"];
    randomNumber = Math.floor(Math.random() * 3);
    computerChoice = choices[randomNumber];
    bothChoices = (playerChoice + computerChoice);
    switch (bothChoices) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
        window.alert("You win");
        break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
        window.alert("You lose");
        break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
        window.alert("The game is a draw");
        break;
    default:
        window.alert("Try again");
    }
}
//gameRPS();
function main() {
    "use strict";
    var playAgain = "y";
    while (playAgain === "y") {
        gameRPS();
        playAgain = window.prompt("Do you want to play again (y/n)?");
    }
    window.alert("Thanks for playing ROCKS, PAPER, SCISSORS.");
}
main();