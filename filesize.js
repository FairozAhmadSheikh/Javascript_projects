const fs = require("fs")
const path = require("path")
const args = process.argv.slice(2)
const filePath = args[0]
if (!filePath) {
  console.log("Please provide a file path")
  process.exit(1)
}
fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error("Error reading file:", err.message)
    process.exit(1)
  }
if (stats.isFile()){
    console.log(`${path.basename(filePath)}: ${stats.size} bytes`)
  } 