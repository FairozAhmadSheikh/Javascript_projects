const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter a string to check for palindrome: ", (str) => {
  const cleaned = str.replace(/[\W_]/g, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  console.log(cleaned === reversed ? "✅ It's a palindrome!" : "❌ Not a palindrome.");
  rl.close();
});