const readline = require('readline');
const fs = require('fs');
const os = require('os');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Utility: Typewriter Effect
function typeWriter(text, speed = 10) {
  return new Promise((resolve) => {
    let i = 0;
    const interval = setInterval(() => {
      process.stdout.write(text[i]);
      i++;
      if (i === text.length) {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}
function loadingBar(task, duration = 3000) {
  return new Promise((resolve) => {
    const barLength = 30;
    let progress = 0;
    process.stdout.write(`${task} [`);
    const interval = setInterval(() => {
      const filled = Math.floor((progress / duration) * barLength);
      const empty = barLength - filled;
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(`${task} [${'#'.repeat(filled)}${'-'.repeat(empty)}] ${Math.floor((progress/duration)*100)}%`);
      progress += 100;
      if (progress >= duration) {
        clearInterval(interval);
        process.stdout.write(`] ✅\n`);
        resolve();
      }
    }, 100);
  });
}