const os = require("os")
const total = os.totalmem()
const free = os.freemem()
const used = total - free
const percent = (used / total) * 100
console.log(`Total Memory: ${(total / 1024 / 1024).toFixed(2)} MB`)
console.log(`Used Memory: ${(used / 1024 / 1024).toFixed(2)} MB`)
console.log(`Free Memory: ${(free / 1024 / 1024).toFixed(2)} MB`)
console.log(`Memory Usage: ${percent.toFixed(2)}%`)