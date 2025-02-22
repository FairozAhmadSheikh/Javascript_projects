const args = process.argv.slice(2);

if (args.length !== 1) {
  console.log(`
❌ Invalid usage!
✅ Example:
  node factorial.js 5
`);
  process.exit(1);
}
const num = parseInt(args[0]);

if (isNaN(num) || num < 0) {
  console.log("❌ Please enter a valid non-negative integer.");
  process.exit(1);
}
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);