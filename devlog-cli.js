const fs = require("fs")
const path = require("path")
const readline = require("readline")
const file = path.join(__dirname, "devlog.txt")
const args = process.argv.slice(2)
const command = args[0]
if (!command) {
  console.log("Usage: devlog-cli.js [add | view | clear]")
  process.exit(1)
}
if (command === "view") {
  if (!fs.existsSync(file)) {
    console.log("No log found")
    process.exit(0)
  }
  const log = fs.readFileSync(file, "utf8")
  console.log(log.trim() === "" ? "Log is empty" : log)
}
else if (command === "add") {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })