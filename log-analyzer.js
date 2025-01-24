const fs = require("fs")
const readline = require("readline")
const path = require("path")
const args = process.argv.slice(2)
const filePath = args[0]
if (!filePath || !fs.existsSync(filePath)) {
  console.log("Usage: log-analyzer.js <path-to-log-file>")
  process.exit(1)
}
