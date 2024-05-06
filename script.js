console.log("Heya")

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
 console.log("Elijo...", getComputerChoice )
