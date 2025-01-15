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
        rl.question("Enter Celsius: ", (c) => {
          console.log(`${c}°C = ${(parseFloat(c) * 9/5 + 32).toFixed(2)}°F`);
          showMenu();
        });
        break;
    case '2':
        rl.question("Enter meters: ", (m) => {
          console.log(`${m} m = ${(parseFloat(m) / 1000).toFixed(3)} km`);
          showMenu();
        });