const args = process.argv.slice(2)
const value = parseFloat(args[0])
const unit = args[1]?.toLowerCase()
if (isNaN(value) || !unit) {
  console.log("Usage: temp-convert.js <value> <c|f|k>")
  process.exit(1)
}
if (unit === "c") {
  const f = value * 9 / 5 + 32
  const k = value + 273.15
  console.log(`${value}°C = ${f.toFixed(2)}°F = ${k.toFixed(2)}K`)
}
else if (unit === "f") {
  const c = (value - 32) * 5 / 9
  const k = c + 273.15
  console.log(`${value}°F = ${c.toFixed(2)}°C = ${k.toFixed(2)}K`)
}
else if (unit === "k") {
  const c = value - 273.15
  const f = c * 9 / 5 + 32
  console.log(`${value}K = ${c.toFixed(2)}°C = ${f.toFixed(2)}°F`)
}
else {
  console.log("Invalid unit. Use c, f, or k")
}