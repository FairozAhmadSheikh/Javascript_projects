const args = process.argv.slice(2)
const value = parseFloat(args[0])
const unit = args[1]?.toLowerCase()
if (isNaN(value) || !unit) {
  console.log("Usage: temp-convert.js <value> <c|f|k>")
  process.exit(1)
}