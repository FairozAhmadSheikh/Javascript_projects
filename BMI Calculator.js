const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter your weight (kg): ", (weight) => {
    rl.question("Enter your height (m): ", (height) => {
        const bmi = parseFloat(weight) / (parseFloat(height) ** 2);