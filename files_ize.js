const fs = require("fs")
const path = require("path")
const args = process.argv.slice(2)
const filePath = args[0]
if (!filePath) {
  console.log("Usage: file-size.js <path-to-file>")
  process.exit(1)
}
fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error("File not found or inaccessible")
    process.exit(1)
  }
const sizeBytes = stats.size
  const sizeKB = sizeBytes / 1024
  const sizeMB = sizeKB / 1024