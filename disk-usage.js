const { exec } = require("child_process")

exec("df -h", (err, stdout, stderr) => {
  if (err || stderr) {