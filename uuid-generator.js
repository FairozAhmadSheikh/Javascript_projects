function generateUUID() {
  let uuid = ""
  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      uuid += "-"
      } else if (i === 14) {
      uuid += "4"
    } else if (i === 19) {
      uuid += (Math.floor(Math.random() * 4) + 8).toString(16)
    } else {
      uuid += Math.floor(Math.random() * 16).toString(16)
    }
     }
  return uuid
}

console.log(generateUUID())