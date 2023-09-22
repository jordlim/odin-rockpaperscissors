function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 1) return "Rock";
  else if (choice == 2) return "Paper";
  else return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      if (computerSelection == "Rock") return ["Tie!", 0];
      else if (computerSelection == "Paper")
        return ["You lose! Paper beats Rock" - 1];
      else return ["You win! Rock beats Scissors", 1];
      break;
    case "paper":
      if (computerSelection == "Rock") return ["You win! Paper beats Rock", 1];
      else if (computerSelection == "Paper") return ["Tie!", 0];
      else return ["You lose! Scissors beats Paper", -1];
      break;
    case "scissors":
      if (computerSelection == "Rock")
        return ["You lose! Rock beats Scissors", -1];
      else if (computerSelection == "Paper")
        return ["You win! Scissors beats Paper", 1];
      else return ["Tie!", 0];
      break;
    default:
      return "Invalid input";
  }
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  winner = playRound("rock", getComputerChoice());
  game(winner);
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  winner = playRound("paper", getComputerChoice());
  game(winner);
});
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  winner = playRound("scissors", getComputerChoice());
  game(winner);
});

let playerScore = 0;
let computerScore = 0;
let rounds = 0;
function game(winner) {
  // for (let i = 0; i < 5; i++) {
  const results = document.querySelector(".results");
  const score = document.querySelector(".score");

  results.textContent = winner[0];
  if (winner[1] == 1) playerScore++;
  else if (winner[1] == -1) computerScore++;

  console.log(playerScore + "-" + computerScore);

  score.textContent = playerScore + "-" + computerScore;
  rounds++;
  if (rounds == 5) {
    if (playerScore > computerScore) results.textContent = "You won the match!";
    else if (playerScore < computerScore)
      results.textContent = "You lost the match!";
    else results.textContent = "The match was a tie.";

    rounds = 0;
    playerScore = 0;
    computerScore = 0;
  }
  // }
  // if (score > 0) console.log("You win!");
  // else if (score < 0) console.log("You lose!");
  // else console.log("It's a draw");
}
