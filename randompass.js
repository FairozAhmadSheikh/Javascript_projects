const args = process.argv.slice(2)
const length = parseInt(args[0]) || 8
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
let password = ""