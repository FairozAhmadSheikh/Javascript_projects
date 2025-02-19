const fs = require("fs")
const path = require("path")
const args = process.argv.slice(2)
const filePath = args[0]
if (!filePath) {
  console.log("Please provide a file path")
  process.exit(1)
}