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
  res.on("end", () => {
    const end = performance.now()
    const seconds = (end - start) / 1000
    const mb = downloaded / (1024 * 1024)
    const speed = mb / seconds
    console.log(`Downloaded ${mb.toFixed(2)} MB in ${seconds.toFixed(2)} seconds`)
    console.log(`Speed: ${speed.toFixed(2)} MB/s`)
    })
}).on("error", err =>