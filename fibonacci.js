const args = process.argv.slice(2);

if (args.length !== 1) {
  console.log(`
❌ Invalid usage!

✅ Example:
  node fibonacci.js 10
`);
  process.exit(1);
}
const n = parseInt(args[0]);

if (isNaN(n) || n < 1) {
  console.log("❌ Please enter a positive integer greater than 0.");
  process.exit(1);
}

function generateFibonacci(n) {
  const fib = [0];
  if (n > 1) fib.push(1);
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}