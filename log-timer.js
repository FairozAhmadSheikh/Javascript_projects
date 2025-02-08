const fs = require("fs")
const path = require("path")

const file = path.join(__dirname, "timelog.txt")
const args = process.argv.slice(2)
const command = args[0]
function now() {
  return new Date().toISOString()
}
if (!command) {
  console.log("Usage: log-timer.js [start | stop | log | clear]")
  process.exit(1)
}