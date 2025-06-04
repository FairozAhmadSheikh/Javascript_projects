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
