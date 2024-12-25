function getComputerChoice() {
    if (Math.random() > 0.66) {
        return ("rock");
    } else if (Math.random() > 0.33) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let answer = prompt("Choose rock, paper or scissors", "").toLowerCase();
    if (answer === "rock" || answer === "paper" || answer === "scissors") {
        return answer;
    } else {
        return "Please choose rock, paper or scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock")
        } else if (computerChoice === "scissors") {
            console.log("You won! Rock beats scissors")
        } else {
            console.log("Play another round")
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You won! Rock beats paper")
        } else if (computerChoice === "scissors") {
            console.log("You lost! Scissors beats paper")
        } else {
            console.log("Play another round")
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lost! Rock beats scissors")
        } else if (computerChoice === "paper") {
            console.log("You won! Scissors beats paper");
        } else {
            console.log("Play another round");
        }
    } else {
        console.log("Make your choice again");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);