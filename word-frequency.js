const fs = require("fs")

const args = process.argv.slice(2)
const filePath = args[0]
if (!filePath) {
  console.log("Usage: word-frequency.js <file-path>")
  process.exit(1)
}
