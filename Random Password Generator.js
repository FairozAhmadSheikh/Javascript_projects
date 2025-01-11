const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
rl.question("Enter desired password length: ", (len) => {
  const length = parseInt(len);
  let password = '';