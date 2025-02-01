const { exec } = require("child_process")

exec("df -h", (err, stdout, stderr) => {
  if (err || stderr) {
    console.error("Error retrieving disk usage")
    process.exit(1)
  }
  console.log(stdout)
})