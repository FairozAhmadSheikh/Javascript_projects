const fs = require("fs")
const path = require("path")
const args = process.argv.slice(2)
const dirPath = args[0]
if (!dirPath) {
  console.log("Usage: dir-size.js <path-to-directory>")
  process.exit(1)
}