const fs = require("fs")
const path = require("path")
const readline = require("readline")
const file = path.join(__dirname, "notes.txt")
const args = process.argv.slice(2)
const command = args[0]
if (!command) {
  console.log("Usage: notepad-cli.js [write | read | clear]")
  process.exit(1)
}

if (command === "read") {
  if (!fs.existsSync(file)) {
    console.log("No notes found")
    process.exit(0)
  }
  const data = fs.readFileSync(file, "utf8")
  console.log(data.trim() === "" ? "No notes found" : data)
}
else if (command === "write") {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })