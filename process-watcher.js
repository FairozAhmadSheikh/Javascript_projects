const { exec } = require("child_process")
const os = require("os")
const args = process.argv.slice(2)
const filter = args[0]?.toLowerCase() || ""
const isWindows = os.platform() === "win32"
const command = isWindows ? "tasklist" : "ps -A"