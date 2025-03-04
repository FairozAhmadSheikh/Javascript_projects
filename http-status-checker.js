const https = require("https")
const http = require("http")
const url = require("url")
const args = process.argv.slice(2)
const target = args[0]

if (!target) {
  console.log("Usage: http-status-checker.js <url>")
  process.exit(1)
}