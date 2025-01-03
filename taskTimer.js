const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function startTimer(minutes) {
  let secondsLeft = minutes * 60;

  const interval = setInterval(() => {
    const min = Math.floor(secondsLeft / 60);
    const sec = secondsLeft % 60;
    console.log(`⏳ ${min}m ${sec}s`);
    if (secondsLeft <= 0) {
      clearInterval(interval);
      console.log("🔔 Time's up!");
      process.stdout.write('\x07'); // Beep
      rl.close();
    }
    secondsLeft--;
  }, 1000);
}
rl.question("Enter task name: ", (task) => {
  rl.question("Enter time in minutes: ", (time) => 
    