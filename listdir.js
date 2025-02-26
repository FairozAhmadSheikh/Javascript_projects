const fs = require("fs")
const path = require("path")

const args = process.argv.slice(2)
const dirPath = args[0] || "."
fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err.message)
    process.exit(1)
  }