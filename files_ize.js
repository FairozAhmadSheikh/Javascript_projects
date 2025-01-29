const fs = require("fs")
const path = require("path")
const args = process.argv.slice(2)
const filePath = args[0]
if (!filePath) {
  console.log("Usage: file-size.js <path-to-file>")
  process.exit(1)
}
fs.stat(filePath, (err, stats) => {
  if (err) 