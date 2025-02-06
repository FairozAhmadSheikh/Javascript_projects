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