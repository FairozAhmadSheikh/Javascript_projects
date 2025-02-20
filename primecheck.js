const args = process.argv.slice(2)
const num = parseInt(args[0])
if (isNaN(num) || num < 2) {
    console.log("Enter an integer greater than 1")
  process.exit(1)
}
let isPrime = true