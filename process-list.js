const { exec } = require("child_process")

const platform = process.platform
let cmd = ""
if (platform === "win32") {
  cmd = "tasklist"
} else {
  cmd = "ps -e -o pid,comm"
}
exec(cmd, (err, stdout, stderr) => {
  if (err || stderr) 