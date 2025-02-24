const args = process.argv.slice(2);

if (args.length !== 1) {
  console.log(`
❌ Invalid usage!

✅ Example:
  node dayfinder.js 2025-06-21
`);
  process.exit(1);
}