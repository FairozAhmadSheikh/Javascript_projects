const args = process.argv.slice(2)
const num = parseInt(args[0])
if (isNaN(num) || num < 2) {