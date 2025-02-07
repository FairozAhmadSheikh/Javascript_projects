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
function saveReminders(reminders) {
  fs.writeFileSync(file, JSON.stringify(reminders, null, 2))
}
function listReminders() {
  const reminders = loadReminders()
  if (reminders.length === 0) {
    console.log("No reminders set")
    return
  }
  reminders.forEach((r, i) => {
    console.log(`${i + 1}. ${r.time} - ${r.text}`)
  })
}