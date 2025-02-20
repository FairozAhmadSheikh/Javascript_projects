const args = process.argv.slice(2)
const num = parseInt(args[0])
if (isNaN(num) || num < 2) {
    console.log("Enter an integer greater than 1")
  process.exit(1)
}
let isPrime = true
for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    isPrime = false
    break
  }
}