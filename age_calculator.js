const args = process.argv.slice(2)
const input = args[0]
if (!input || isNaN(Date.parse(input))) {
  console.log("Usage: age-calculator.js <yyyy-mm-dd>")
  process.exit(1)
}
const birthDate = new Date(input)
const today = new Date()