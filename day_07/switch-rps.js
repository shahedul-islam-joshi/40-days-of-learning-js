function rockPaperScissorsGame () {
    // Step 1: Get the user input
    console.log("Welcome to the Rock, Paper, Scissors Game!");
    const userChoicePrompt = prompt("Please enter your choice (rock, paper, or scissors):")
    const userChoice = userChoicePrompt.toLowerCase();

/*The above code is the same as the original rps.js file, but we will replace the if-else statements with a switch 
statement for better readability and maintainability.
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

*/
    // Step 2: Get the computer's choice
    let computerChoice;
    const randomNumber = Math.floor (Math.random() * 3) + 1; // This will give us a random number between 1 and 3
    switch (randomNumber) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        default:
            computerChoice = "scissors";
    }





    /*The above code is the same as the original rps.js file, but we will replace the if-else statements with a 
    switch statement for better readability and maintainability.
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

*/

    // Step 3: Compare user and computer's choice
    switch (userChoice) {
        case "rock":
        case "paper":
        case "scissors":
            // Valid choice, proceed with comparison
            break;
        default:
            console.log("Please check the input, We didn't understand it.");
            return; // Exit the function if the input is invalid
    }

    switch (userChoice) {
        case (userChoice === computerChoice):
            console.log(`It's a tie! Both you and the computer chose ${userChoice}.`);
            break;
        case (userChoice === "rock" && computerChoice === "scissors") ||
             (userChoice === "paper" && computerChoice === "rock") ||
             (userChoice === "scissors" && computerChoice === "paper"):
            console.log(`Congratulations! You win! You chose ${userChoice} and the computer chose ${computerChoice}.`);
            break;
        default:
            console.log(`Sorry, you lose! You chose ${userChoice} and the computer chose ${computerChoice}.`);
    }




    // Step 4: Announce the winner (already done in the above steps)



/*The above code is the same as the original rps.js file, but we will replace the if-else statements with a switch statement
 for better readability and maintainability.
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

*/
    // Step 5: Ask the user to play again or quit from the game.
    const playAgainPrompt = prompt("Do you want to play again? (yes or no):");
    const playAgain = playAgainPrompt.toLowerCase();
    switch (playAgain) {
        case "yes":
            rockPaperScissorsGame();
            break;
        default:
            console.log("Thank you for playing! Goodbye!");
    }
}

rockPaperScissorsGame(); // Start the game