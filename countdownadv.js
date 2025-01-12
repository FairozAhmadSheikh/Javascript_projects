const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter countdown time in seconds: ", (sec) => {
  let time = parseInt(sec);