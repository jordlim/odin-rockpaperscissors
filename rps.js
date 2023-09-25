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
        return ["You lose! Paper beats Rock", -1];
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

function setButtonColor(winner, btn) {
  if (winner[1] == 1) btn.style.color = "green";
  else if (winner[1] == -1) btn.style.color = "red";
  else btn.style.color = "blue";
}

// Button selectors
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    winner = playRound(btn.id, getComputerChoice());

    // Loop through every button and reset color. Slightly inefficient
    buttons.forEach((btncol) => {
      btncol.style.color= "white";
    });

    setButtonColor(winner, btn);
    game(winner);
  });
});

let win = 0;
let loss = 0;
let draw = 0;
let rounds = 0;
function game(winner) {
  const results = document.querySelector(".results");
  const score = document.querySelector(".score");
  const match = document.getElementById("match");

  // Keep match results empty during new games
  match.textContent = "";

  // Adjust score and round state
  results.textContent = winner[0];
  if (winner[1] == 1) win++;
  else if (winner[1] == -1) loss++;
  else draw++;

  score.textContent = win + "-" + loss + "-" + draw;
  rounds++;

  if (rounds == 5) {
    if (win > loss) {
      match.style.color = "green";
      match.textContent = "You won the match!";
    } else if (win < loss) {
      match.style.color = "red";
      match.textContent = "You lost the match!";
    } else {
      match.style.color = "blue";
      match.textContent = "The match was a tie.";
    }

    // Reset game
    rounds = 0;
    win = 0;
    loss = 0;
    draw = 0;
  }
  // }
  // if (score > 0) console.log("You win!");
  // else if (score < 0) console.log("You lose!");
  // else console.log("It's a draw");
}
