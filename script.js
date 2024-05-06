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
