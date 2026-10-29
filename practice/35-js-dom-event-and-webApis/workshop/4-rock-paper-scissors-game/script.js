// An array containing the three possible choices in the game.
const options = ["Rock", "Paper", "Scissors"];

// This function randomly selects one option for the computer.
function getRandomComputerResult() {
  // Math.random() generates a random decimal between 0 (inclusive) and 1 (exclusive).
  // Multiplying by options.length (3) gives a decimal between 0 and 3.
  // Math.floor() rounds the decimal DOWN to a whole number: 0, 1, or 2.
  // This whole number becomes the random index of the array.
  const randomIndex = Math.floor(Math.random() * options.length);

  // Return the array item at the randomly selected index.
  // Index 0 = "Rock", index 1 = "Paper", index 2 = "Scissors".
  return options[randomIndex];
}

// This function checks whether the player has won the round.
// It receives the player's choice and the computer's choice as arguments.
function hasPlayerWonTheRound(playerChoice, computerChoice) {
  // Return true if ANY of the three winning combinations is satisfied.
  //
  // && means AND: both conditions on that line must be true.
  // || means OR: at least one of the three combinations must be true.
  //
  // Rock beats Scissors.
  // Scissors beats Paper.
  // Paper beats Rock.
  //
  // If a winning combination matches, the function returns true.
  // Otherwise, the complete expression returns false.
  return (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  );
}

// These variables keep track of the scores throughout the game.
// Both scores start at 0.
let playerScore = 0;
let computerScore = 0;

// This function determines the result of one round and updates the scores.
// userOption represents the choice made by the player.
function getRoundResults(userOption) {
  // Generate a random choice for the computer.
  // Store the result in computerResult so we can use it more than once.
  const computerResult = getRandomComputerResult();

  // Check whether the player's choice beats the computer's choice.
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    // The player won, so increase the player's score by 1.
    // The ++ operator adds 1 to the current value.
    playerScore++;

    // Return a message explaining why the player won.
    // Template literals use backticks and ${} to insert variable values.
    return `Player wins! ${userOption} beats ${computerResult}`;

    // If the player did not win, check whether both choices are identical.
  } else if (computerResult === userOption) {
    // Both chose the same option, so the round is a tie.
    // Neither score increases.
    return `It's a tie! Both chose ${userOption}`;

    // If neither condition above is true, the computer has won.
  } else {
    // Increase the computer's score by 1.
    computerScore++;

    // Return a message explaining why the computer won.
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

// Find the HTML element that displays the player's score.
// getElementById() searches for an element with this specific ID.
const playerScoreSpanElement = document.getElementById("player-score");

// Find the HTML element that displays the computer's score.
const computerScoreSpanElement = document.getElementById("computer-score");

// Find the HTML element where the result of each round will be displayed.
const roundResultsMsg = document.getElementById("results-msg");

// Find the HTML element where the overall winner will be announced.
const winnerMsgElement = document.getElementById("winner-msg");

// Find the container holding the Rock, Paper, and Scissors buttons.
const optionsContainer = document.querySelector(".options-container");

// Find the button used to reset the game.
const resetGameBtn = document.getElementById("reset-game-btn");

// This function runs whenever the player selects Rock, Paper, or Scissors.
// Its job is to display the round result, update the displayed scores,
// and check whether someone has won the entire game.
function showResults(userOption) {
  // Call getRoundResults() to determine the round's outcome.
  // Store the returned message inside the HTML results element.
  //
  // IMPORTANT: getRoundResults() also updates playerScore or computerScore
  // when someone wins the round.
  roundResultsMsg.innerText = getRoundResults(userOption);

  // Display the computer's updated score on the webpage.
  // The computerScore variable already contains the latest score.
  computerScoreSpanElement.innerText = computerScore;

  // Display the player's updated score on the webpage.
  // The playerScore variable already contains the latest score.
  playerScoreSpanElement.innerText = playerScore;

  // Check whether either player has reached 3 points.
  // The game ends as soon as one of these conditions is true.
  if (playerScore === 3 || computerScore === 3) {
    // Display the overall winner.
    //
    // The ternary operator checks whether playerScore equals 3.
    // If true, it selects "Player".
    // If false, it selects "Computer".
    //
    // The selected name is inserted into the message using ${}.
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    // Show the reset button so the player can start another game.
    resetGameBtn.style.display = "block";

    // Hide the Rock, Paper, and Scissors buttons because the game is over.
    optionsContainer.style.display = "none";
  }
}

// This function resets the game scores and clears the displayed messages.
function resetGame() {
  // Check whether the game has ended.
  // If either score is 3, the game has reached its winning condition.
  if (playerScore === 3 || computerScore === 3) {
    // Hide the reset button because a new game is about to begin.
    resetGameBtn.style.display = "none";

    // Show the options container again so the player can make choices.
    optionsContainer.style.display = "block";
  }

  // Reset the player's score variable to 0.
  playerScore = 0;

  // Update the displayed player's score to 0.
  playerScoreSpanElement.innerText = 0;

  // Reset the computer's score variable to 0.
  computerScore = 0;

  // Update the displayed computer's score to 0.
  computerScoreSpanElement.innerText = 0;

  // Clear the previous round's result message.
  roundResultsMsg.innerText = "";

  // Clear the previous game's winner announcement.
  winnerMsgElement.innerText = "";
}

// Listen for clicks on the reset button.
// When clicked, call resetGame to reset the game.
resetGameBtn.addEventListener("click", resetGame);

// Find the HTML button for Rock.
const rockBtn = document.getElementById("rock-btn");

// Find the HTML button for Paper.
const paperBtn = document.getElementById("paper-btn");

// Find the HTML button for Scissors.
const scissorsBtn = document.getElementById("scissors-btn");

// Listen for clicks on the Rock button.
// When clicked, call showResults and pass "Rock" as the player's choice.
rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

// Listen for clicks on the Paper button.
// When clicked, call showResults and pass "Paper" as the player's choice.
paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

// Listen for clicks on the Scissors button.
// When clicked, call showResults and pass "Scissors" as the player's choice.
scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});
