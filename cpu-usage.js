const os = require("os")

function getCpuUsage() {
  const cpus = os.cpus()
  let totalIdle = 0
  let totalTick = 0