const args = process.argv.slice(2);

if (args.length !== 1) {
  console.log(`
❌ Invalid usage!

✅ Example:
  node fibonacci.js 10
`);
  process.exit(1);
}
