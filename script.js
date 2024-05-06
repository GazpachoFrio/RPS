console.log("Heya")
function Playerchoice(){
    let HumanChoice = prompt("Choose Wisely")
    if (HumanChoice.charAt() === "Scissors"){
        alert("Scissors!");
        }
    else if (HumanChoice === "Rock"){
        alert("Rock!");
    }
    else if (HumanChoice === "Paper"){
        alert("Paper!");
    }
    else if (HumanChoice !== "Paper" && HumanChoice !== "Rock" && HumanChoice !== "Scissors"){
        alert("Learn to use a Keyboard first!")
    }
        
} 
console.log(Playerchoice())



function getRandomInt(max) {
    return Math.floor(Math.random()*max);
 }
 function getComputerChoice(){
   let PCChoice = getRandomInt(3);
    if (PCChoice === 2) {
        return "Scissors";
    } 
    else if (PCChoice === 1) {
        return "Rock";
    }
    else if (PCChoice ===0) {
        return "Paper";
    }
   
 } 
 console.log (getRandomInt(3))
 console.log("Elijo...", getComputerChoice() )
 let humanScore = Number (0);
 let computerScore; Number (0)

 function WhoWin(){
    if (getComputerChoice === 1 && Playerchoice === "Paper"){
        return (humanScore +1, "You win! Paper beat Rock");
    }
    else if (getComputerChoice === 2 && Playerchoice === "Paper"){
        return (computerScore +1, "You Lose! Scissors beat Paper");
    }
    else if (getComputerChoice === 0 && Playerchoice === "Rock"){
        return(computerScore +1, "You Lose! Paper beat Rock");
    }
    else if (getComputerChoice === 1 && Playerchoice === "Scissors"){
        return (computerScore +1, "You Lose! Scissors beat Paper");
    }
    else if (getComputerChoice === 2 && Playerchoice === "Rock"){
        return (humanScore +1, "You win! Rock beat Scissors");
    }
    else if (getComputerChoice === 0 && Playerchoice === "Scissors"){
        return (humanScore +1, "You win! Scissors beat Paper");
    }
 }
