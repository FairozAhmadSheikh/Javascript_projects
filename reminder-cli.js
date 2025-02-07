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
function addReminder(time, text) {
  if (!time || !text) {
    console.log("Usage: reminder-cli.js add TIME TEXT")
    return
  }
  const reminders = loadReminders()
  reminders.push({ time, text })
  saveReminders(reminders)
  console.log("Reminder added")
}function removeReminder(index) {
  const reminders = loadReminders()
  if (index < 1 || index > reminders.length) {
    console.log("Invalid reminder number")
    return
  }
  reminders.splice(index - 1, 1)
  saveReminders(reminders)
  console.log("Reminder removed")
}
switch (command) {
  case "list":
    listReminders()
    break
  case "add":
    addReminder(args[1], args.slice(2).join(" "))
    break
  case "remove":
    removeReminder(parseInt(args[1]))
    break
  default:
    console.log("Usage: reminder-cli.js [list | add TIME TEXT | remove INDEX]")
}