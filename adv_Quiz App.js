const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const questions = [
  { q: "Capital of France?", a: "paris" },
  { q: "5 + 3 = ?", a: "8" },
  { q: "JS stands for?", a: "javascript" },
];
let score = 0;
let index = 0;