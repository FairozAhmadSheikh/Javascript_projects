const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
  output: process.stdout
});
let todos = [];
function showMenu() {
  console.log("\nTodo CLI");
  console.log("1. Add Todo");
  console.log("2. List Todos");
  console.log("3. Delete Todo");
  console.log("4. Exit");
  rl.question("Choose an option: ", handleInput);
}