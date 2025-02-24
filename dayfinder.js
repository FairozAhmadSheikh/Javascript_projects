const args = process.argv.slice(2);

if (args.length !== 1) {
  console.log(`
❌ Invalid usage!

✅ Example:
  node dayfinder.js 2025-06-21
`);
  process.exit(1);
}
const inputDate = new Date(args[0]);

if (isNaN(inputDate)) {
  console.log("❌ Invalid date format. Use YYYY-MM-DD.");
  process.exit(1);
}