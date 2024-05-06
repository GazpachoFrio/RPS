let humanScore = 0;
let computerScore = 0;

function Playerchoice() {
    let HumanChoice = prompt("Choose Wisely");
    return HumanChoice;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let PCChoice = getRandomInt(3);
    if (PCChoice === 2) {
        return "Scissors";
    } else if (PCChoice === 1) {
        return "Rock";
    } else {
        return "Paper";
    }
}

function WhoWin(playerChoice, computerChoice) {
    if (playerChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        console.log("You win! Paper beats Rock");
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++;
        console.log("You win! Scissors beats Paper");
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++;
        console.log("You win! Rock beats Scissors");
    } else if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else {
        computerScore++;
        console.log("You lose!");
    }
}

function Play() {
    let playerChoice = Playerchoice();
    let computerChoice = getComputerChoice();
    console.log("Player chose:", playerChoice);
    console.log("Computer chose:", computerChoice);
    WhoWin(playerChoice, computerChoice);
    
    console.log("Player Score:", humanScore);
    console.log("Computer Score:", computerScore);

    if (humanScore === 3 || computerScore === 3) {
        console.log("Game finished");
        // Puedes reiniciar los puntajes aquí si quieres volver a jugar
    }
}

// Llamamos a la función Play para iniciar el juego
Play();
