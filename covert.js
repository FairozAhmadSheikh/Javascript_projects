const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log(`
❌ Incorrect usage!

✅ Format:
  node convert.js <value> <from_unit> <to_unit>

🔁 Supported conversions:
  km ⇄ mi
  kg ⇄ lb
  C ⇄ F
`);
process.exit(1);
}
const [valueStr, from, to] = args;
const value = parseFloat(valueStr);

if (isNaN(value)) {
  console.log("❌ Invalid number provided.");
  process.exit(1);
}
function convert(value, from, to) {
  const key = `${from.toLowerCase()}-${to.toLowerCase()}`;

  switch (key) {
    case "km-mi":
      return value * 0.621371;
    case "mi-km":
      return value / 0.621371;
    case "kg-lb":
      return value * 2.20462;
       case "lb-kg":
      return value / 2.20462;
    case "c-f":
      return (value * 9) / 5 + 32;
    case "f-c":
      return ((value - 32) * 5) / 9;
    default:
      return null;
  }
}