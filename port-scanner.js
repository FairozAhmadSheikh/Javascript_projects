const net = require("net")

const args = process.argv.slice(2)
const host = args[0]
const startPort = parseInt(args[1]) || 1
const endPort = parseInt(args[2]) || 1024
if (!host) {
  console.log("Usage: port-scanner.js <host> [startPort] [endPort]")
  process.exit(1)
}
function scanPort(port) {
  return new Promise(resolve => {
    const socket = new net.Socket()
    let open = false
    socket.setTimeout(500)
    socket.on("connect", () => {
      open = true
      socket.destroy()
      socket.setTimeout(500)
      socket.on("connect", () => {
      open = true
      socket.destroy()
      })

    socket.on("timeout", () => socket.destroy())
    socket.on("error", () => resolve({ port, open: false }))
    socket.on("close", () => resolve({ port, open }))

    socket.connect(port, host)