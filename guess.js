const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const secret = Math.floor(Math.random() * 100) + 1;
let attempts = 0;