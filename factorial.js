const args = process.argv.slice(2);

if (args.length !== 1) {
  console.log(`
❌ Invalid usage!
✅ Example:
  node factorial.js 5
`);
  process.exit(1);
}