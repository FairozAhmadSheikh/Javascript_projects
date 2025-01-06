const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const secret = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
function guess() {
  rl.question("Guess a number (1-100): ", (num) => {
    attempts++;
    const guessNum = parseInt(num);
    if (guessNum === secret) {
      console.log(`🎉 Correct! You guessed in ${attempts} attempts.`);
      rl.close();