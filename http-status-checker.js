const https = require("https")
const http = require("http")
const url = require("url")
const args = process.argv.slice(2)
const target = args[0]

if (!target) {
  console.log("Usage: http-status-checker.js <url>")
  process.exit(1)
}
const parsed = url.parse(target)
const protocol = parsed.protocol === "https:" ? https : http

const req = protocol.get(target, res => {
  console.log(`Status Code: ${res.statusCode}`)
  console.log(`Status Message: ${res.statusMessage}`)
  console.log(`Headers:`)
  console.log(res.headers)
})
req.on("error", err => {
  console.log("Request failed:", err.message)
})