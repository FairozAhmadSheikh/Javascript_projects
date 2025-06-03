const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const target = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("🎯 Welcome to the Number Guessing Game!");
console.log("🤔 I'm thinking of a number between 1 and 100.");
console.log("👉 Try to guess it! Type 'exit' to quit.\n");
function askGuess() {
  rl.question("🔢 Your guess: ", (input) => {
    if (input.toLowerCase() === "exit") {
      console.log("👋 Exiting. The number was:", target);
      rl.close();
      return;
    }
    const guess = parseInt(input);
    attempts++;
    if (isNaN(guess)) {
      console.log("❌ Please enter a valid number.");
    } else if (guess < target) {
      console.log("📉 Too low!");
    } else if (guess > target) {
      console.log("📈 Too high!");
    } else{
      console.log(`🎉 Correct! The number was ${target}`);
      console.log(`📊 You took ${attempts} attempt(s).`);
      rl.close();
      return;
    }
    askGuess();
  });
}

askGuess();