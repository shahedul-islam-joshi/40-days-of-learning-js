const MIN_NUMBER = 1;
const MAX_NUMBER = 10;
function startSecretNumberGame() {
    const secretNumber = Math.floor(Math.random() * MAX_NUMBER) + 1;
    let attempts = 0;
    let guess = null;
    console.log("Welcome to the Number Guessing Game!");
    console.log("Try to guess a number between 1 and 10.");
    while (guess !== secretNumber) {
        const guessPrompt = prompt("Enter your guess: ");
        guess = parseInt(guessPrompt);
        if (isNaN(guess) || guess < MIN_NUMBER || guess > MAX_NUMBER) {
            console.log(`Invalid input! Please enter a number between ${MIN_NUMBER} and ${MAX_NUMBER}.`);
            continue;
        }
        attempts++;
        switch (true) {
            case guess < secretNumber:
                console.log("Too Low! Try again.");
                break;
            case guess > secretNumber:
                console.log("Too High! Try again.");
                break;
            default:
                console.log(`🎉 Congrats! You guessed the number in ${attempts} attempts.`);
            break;
        }
    }
    const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
    console.log(playAgainPrompt);
    const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : "no";
    switch (playAgain) {
        case "yes":
            startSecretNumberGame();
            break;
        default:
            console.log("Thanks for playing! See you next time.");
    }
}
// Start the game
startSecretNumberGame();