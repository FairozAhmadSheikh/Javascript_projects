const https = require("https")
const { performance } = require("perf_hooks")
const url = "https://speed.hetzner.de/100MB.bin"

console.log("Testing download speed...")
const start = performance.now()

https.get(url, res => {
  let downloaded = 0

  res.on("data", chunk => {
    downloaded += chunk.length
  })