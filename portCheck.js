const net = require("net")

const args = process.argv.slice(2)
const port = parseInt(args[0], 10) || 3000
const server = net.createServer()

server.once("error", err => {
  if (err.code === "EADDRINUSE") {
    console.log(`Port ${port} is in use`)
    } else {
    console.log("Error:", err.message)
  }
  process.exit(1)
})
server.once("listening", () => {
  console.log(`Port ${port} is available`)
  server.close()
})