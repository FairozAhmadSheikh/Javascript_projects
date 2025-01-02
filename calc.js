const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log(`
❌ Incorrect usage!

✅ Example:
  node calc.js add 5 3
  node calc.js sub 10 4
  node calc.js mul 6 7
  node calc.js div 20 4
`);
  process.exit(1);
}