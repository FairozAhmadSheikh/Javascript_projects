const https = require("https")
const { performance } = require("perf_hooks")
const url = "https://speed.hetzner.de/100MB.bin"

console.log("Testing download speed...")