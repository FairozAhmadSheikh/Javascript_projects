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
if (command === "start") {
  const entry = `START: ${now()}\n`
  fs.appendFileSync(file, entry)
  console.log("Started at", entry.trim())
}
else if (command === "stop") {
  const entry = `STOP: ${now()}\n`
  fs.appendFileSync(file, entry)
  console.log("Stopped at", entry.trim())
}
else if (command === "log") {
  if (!fs.existsSync(file)) {
    console.log("No log found")
    process.exit(0)
  }
  const log = fs.readFileSync(file, "utf8")
  console.log(log)
}