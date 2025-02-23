const args = process.argv.slice(2);

if (args.length < 1) {
  console.log(`
❌ Please enter a word or phrase to check.

✅ Example:
  node palindrome.js madam
  node palindrome.js "A man a plan a canal Panama"
`);
  process.exit(1);
}
const input = args.join(" ").toLowerCase().replace(/[^a-z0-9]/g, "");
const reversed = input.split("").reverse().join("");
if (input === reversed) {
  console.log("✅ It's a palindrome!");
}else{
  console.log("❌ Not a palindrome.");
}