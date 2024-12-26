function getComputerChoice() {
    if (Math.random() > 0.66) {
        return ("камень");
    } else if (Math.random() > 0.33) {
        return "бумага";
    } else {
        return "ножницы";
    }
}

function getHumanChoice() {
    let answer = prompt("Набери камень, бумага или ножницы", "").toLowerCase();
    if (answer === "камень" || answer === "бумага" || answer === "ножницы") {
        return answer;
    } else {
        return "Набери правильно камень, бумага or ножницы";
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let result = () => {
        if (humanScore > computerScore) {
            console.log("Человек победил машину");
        } else if (humanScore < computerScore) {
            console.log("Машина победила человека");
        } else {
            console.log("Ничья");
        }
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "камень") {
            if (computerChoice === "бумага") {
                computerScore++;
                console.log("Ты проиграл! бумага бьёт камень")
            } else if (computerChoice === "ножницы") {
                humanScore++;
                console.log("Ты выиграл! камень бьёт ножницы")
            } else {
                console.log("Ничья")
            }
        } else if (humanChoice === "бумага") {
            if (computerChoice === "камень") {
                humanScore++;
                console.log("Ты выиграл! камень бьёт бумагу")
            } else if (computerChoice === "ножницы") {
                computerScore++;
                console.log("Ты проиграл! ножницы бьют бумагу")
            } else {
                console.log("Play another round")
            }
        } else if (humanChoice === "ножницы") {
            if (computerChoice === "камень") {
                computerScore++;
                console.log("You lost! камень beats ножницы")
            } else if (computerChoice === "бумага") {
                humanScore++;
                console.log("You won! ножницы beats бумага");
            } else {
                console.log("Ничья");
            }
        } else {
            console.log("Набери ещё раз");
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
    console.log(result());
}


playGame();
