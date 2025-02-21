const https = require("https")

const args = process.argv.slice(2)
const city = args.join(" ")
if (!city) {
  console.error("Please provide a city name")
  process.exit(1)
}
