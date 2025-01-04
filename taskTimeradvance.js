const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function startTimer(minutes) {
  let secondsLeft = minutes * 60;

  const interval = setInterval(() => {
    const min = Math.floor(secondsLeft / 60);
    const sec = secondsLeft % 60;
    console.log(`⏳ ${min}m ${sec}s`);
