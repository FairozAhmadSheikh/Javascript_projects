const net = require("net")

const args = process.argv.slice(2)
const port = parseInt(args[0], 10) || 3000
const server = net.createServer()