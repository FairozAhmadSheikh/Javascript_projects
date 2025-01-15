const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const convertMenu = `
Unit Converter:
1. Celsius to Fahrenheit
2. Meters to Kilometers
3. Kilograms to Pounds
4. Exit
Choose an option: `;
function showMenu() {
  rl.question(convertMenu, (option) => {
    switch (option) {
      case '1':