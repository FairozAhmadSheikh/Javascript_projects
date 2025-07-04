const { exec } = require("child_process")
const os = require("os")
const args = process.argv.slice(2)
const filter = args[0]?.toLowerCase() || ""
const isWindows = os.platform() === "win32"
const command = isWindows ? "tasklist" : "ps -A"
exec(command, (error, stdout) => {
  if (error) {
    console.log("Failed to list processes")
    process.exit(1)
  }
const lines = stdout.split("\n").filter(line => line.toLowerCase().includes(filter))
  if (lines.length === 0) {
    console.log("No matching processes found")
  } else{
    lines.forEach(line => console.log(line))
  }
})