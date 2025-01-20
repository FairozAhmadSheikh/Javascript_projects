const fs = require("fs")

const args = process.argv.slice(2)
const filePath = args[0]
const query = args[1]
if (!filePath || !query) {
  console.log("Usage: json-query.js <file.json> <dot.notation.query>")
  process.exit(1)
}
try {
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"))
  const keys = query.split(".")
  let result = data
  for (const key of keys) {
    if (result && key in result) {
      result = result[key]
    }
    else {
      console.log("Query not found")
      process.exit(1)
    }
  }