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