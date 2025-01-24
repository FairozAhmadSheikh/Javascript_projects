const fs = require("fs")
const readline = require("readline")
const path = require("path")
const args = process.argv.slice(2)
const filePath = args[0]
if (!filePath || !fs.existsSync(filePath)) {
  console.log("Usage: log-analyzer.js <path-to-log-file>")
  process.exit(1)
}
const ipCount = {}
const statusCount = {}
let totalLines = 0
const rl = readline.createInterface({
  input: fs.createReadStream(filePath),
  crlfDelay: Infinity
})
rl.on("line", line => {
  totalLines++

  const parts = line.split(" ")
  const ip = parts[0]
  const status = parts[8]

  if (ip) ipCount[ip] = (ipCount[ip] || 0) + 1
  if (status) statusCount[status] = (statusCount[status] || 0) + 1
})
rl.on("close", () => {
  console.log(`Total Requests: ${totalLines}`)

  const sortedIPs = Object.entries(ipCount).sort((a, b) => b[1] - a[1])
  const sortedStatus = Object.entries(statusCount).sort((a, b) => b[1] - a[1])
 console.log("Top 5 IPs:")
  sortedIPs.slice(0, 5).forEach(([ip, count]) => {
    console.log(`${ip}: ${count}`)
  })