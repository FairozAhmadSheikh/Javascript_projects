const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter file path to read: ", (path) => {
    fs.readFile(path, 'utf8', (err, data) => {