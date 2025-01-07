const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter your note: ", (note) => {
  fs.appendFileSync('notes.txt', note + '\n');