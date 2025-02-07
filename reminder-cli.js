const fs = require("fs")
const path = require("path")
const file = path.join(__dirname, "reminders.json")
const args = process.argv.slice(2)
const command = args[0]