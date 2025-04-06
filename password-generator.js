const length = parseInt(process.argv[2]) || 12

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"
let password = ""
for (let i = 0; i < length; i++) {
  const index = Math.floor(Math.random() * charset.length)
  password += charset[index]
}
console.log(password)