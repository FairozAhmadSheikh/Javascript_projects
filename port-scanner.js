const net = require("net")

const args = process.argv.slice(2)
const host = args[0]
const startPort = parseInt(args[1]) || 1
const endPort = parseInt(args[2]) || 1024
if (!host) {
  console.log("Usage: port-scanner.js <host> [startPort] [endPort]")
  process.exit(1)
}