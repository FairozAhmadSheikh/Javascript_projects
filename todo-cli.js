const fs = require("fs")
const path = require("path")

const file = path.join(__dirname, "todo.json")
const args = process.argv.slice(2)
const command = args[0]


function loadTodos() {
  if (!fs.existsSync(file)) return []
  const data = fs.readFileSync(file, "utf8")
  return JSON.parse(data)
}
function saveTodos(todos) {
  fs.writeFileSync(file, JSON.stringify(todos, null, 2))
}