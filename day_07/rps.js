/**
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

// Assumptions:
// 1. We have to prompt the user to get their inputs.
// 2. The Computer's selection will be random.
// 3. We have to compare user and computer's choice
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.



function rockPaperScissorsGame () {
    // Step 1: Get the user input
    console.log("Welcome to the Rock, Paper, Scissors Game!");
    const userChoicePrompt = prompt("Please enter your choice (rock, paper, or scissors):")
    const userChoice = userChoicePrompt.toLowerCase();


    // Step 2: Get the computer's choice
    let computerChoice;
    const randomNumber = Math.floor (Math.random() * 3) + 1; // This will give us a random number between 1 and 3
    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2)  {
        computerChoice = "paper";
    }
        else {
        computerChoice = "scissors";
    }

    // Step 3: Compare user and computer's choice
// 1. First, check if the input is valid
if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
  console.log("Please check the input, We didn't understand it.");
} 
// 2. Then, check for a tie
else if (userChoice === computerChoice) {
  console.log(`It's a tie! Both you and the computer chose ${userChoice}.`);
} 
// 3. Then, check for a win
else if (
  (userChoice === "rock" && computerChoice === "scissors") ||
  (userChoice === "paper" && computerChoice === "rock") ||
  (userChoice === "scissors" && computerChoice === "paper")
) {
  console.log(`Congratulations! You win! You chose ${userChoice} and the computer chose ${computerChoice}.`);
} 
// 4. Everything else left must be a loss
else {
  console.log(`Sorry, you lose! You chose ${userChoice} and the computer chose ${computerChoice}.`);
}



    // Step 4: Announce the winner (already done in the above steps)


    // Step 5: Ask the user to play again or quit from the game.
    const playAgainPrompt = prompt("Do you want to play again? (yes or no):");
    const playAgain = playAgainPrompt.toLowerCase();
    if (playAgain === "yes") {
        rockPaperScissorsGame(); // Restart the game
    } else {
        console.log("Thank you for playing! Goodbye!");
    }
}

rockPaperScissorsGame(); // Start the game

