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
function handleInput(choice) {
  switch (choice) {
    case '1':
      rl.question("Enter todo: ", (todo) => {
        todos.push(todo);
        console.log("Todo added.");
        showMenu();
      });
      break;
    case '2':
      console.log("\nYour Todos:");
      todos.forEach((t, i) => console.log(`${i + 1}: ${t}`));
      showMenu();
      break;