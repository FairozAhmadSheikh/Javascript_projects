const args = process.argv.slice(2);

if (args.length !== 1 || isNaN(args[0])) {
  console.log(`
❌ Invalid usage!

✅ Example:
  node timer.js 10   # countdown from 10 seconds
`);
  process.exit(1);
}