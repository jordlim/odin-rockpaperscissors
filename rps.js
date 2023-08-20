console.log("Hello");

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 1) return "Rock";
  else if (choice == 2) return "Paper";
  else return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  let input = toLowerCase(playerSelection);

  switch (input){
    case "rock":
      



    default:
      console.log("Invalid input")
  }
}

const playerSelection = prompt("What do you play?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
