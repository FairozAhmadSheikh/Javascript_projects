const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function startTimer(minutes) {
  let secondsLeft = minutes * 60;