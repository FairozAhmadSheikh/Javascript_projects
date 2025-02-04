const args = process.argv.slice(2)
const key = args[0]
if (!key) {
  console.log("Usage: env-checker.js ENV_VARIABLE_NAME")
  process.exit(1)
}
const value = process.env[key]

if (value) {
  console.log(`${key} = ${value}`)
} 