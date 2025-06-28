const fs = require("fs")
const path = require("path")
const args = process.argv.slice(2)
const dirPath = args[0]
if (!dirPath) {
  console.log("Usage: dir-size.js <path-to-directory>")
  process.exit(1)
}
let totalSize = 0

function calculateDirSize(dir) {
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const fullPath = path.join(dir, file)
    const stats = fs.statSync(fullPath)

    if (stats.isFile()) {
      totalSize += stats.size
    } else if (stats.isDirectory()) {
      calculateDirSize(fullPath)
    }
  })
}
try {
  calculateDirSize(dirPath)

  const sizeKB = totalSize / 1024
  const sizeMB = sizeKB / 1024
  console.log(`Directory Size: ${totalSize} B`)
  console.log(`Directory Size: ${sizeKB.toFixed(2)} KB`)
  console.log(`Directory Size: ${sizeMB.toFixed(2)} MB`)
} catch {
  console.log("Invalid directory path or access denied")
}