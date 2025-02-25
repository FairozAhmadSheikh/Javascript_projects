#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.length !== 1 || isNaN(args[0])) {
  console.log(`
❌ Invalid usage!

✅ Example:
  node timer.js 10   # countdown from 10 seconds
`);
  process.exit(1);
}

let seconds = parseInt(args[0]);

console.log(`⏳ Countdown started for ${seconds} second(s)...`);

const interval = setInterval(() => {
  if (seconds <= 0) {
    console.log("⏰ Time's up!");
    clearInterval(interval);
    return;
  }

  console.log(`⏱️ ${seconds} second(s) remaining...`);
  seconds--;
}, 1000);
