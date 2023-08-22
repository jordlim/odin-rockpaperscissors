function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 1) return "Rock";
  else if (choice == 2) return "Paper";
  else return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  let input = playerSelection.toLowerCase();

  switch (input) {
    case "rock":
      if (computerSelection == "Rock") console.log("Tie!");
      else if (computerSelection == "Paper")
        console.log("You lose! Paper beats Rock");
      else console.log("You win! Rock beats Scissors");
      break;
    case "paper":
      if (computerSelection == "Rock") console.log("You win! Paper beats Rock");
      else if (computerSelection == "Tie!") console.log("Lose");
      else console.log("You lose! Scissors beats Paper");
      break;
    case "scissors":
      if (computerSelection == "Rock") console.log("You lose! Rock beats Scissors");
      else if (computerSelection == "Paper") console.log("You win! Scissors beats Paper");
      else console.log("TIe!");
      break;
    default:
      console.log("Invalid input");
  }
}

const playerSelection = prompt("What do you play?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
