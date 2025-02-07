const fs = require("fs")
const path = require("path")
const file = path.join(__dirname, "reminders.json")
const args = process.argv.slice(2)
const command = args[0]
function loadReminders() {
  if (!fs.existsSync(file)) return []
  const data = fs.readFileSync(file, "utf8")
  return JSON.parse(data)
}