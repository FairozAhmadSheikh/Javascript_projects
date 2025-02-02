const os = require("os")

function getCpuUsage() {
  const cpus = os.cpus()
  let totalIdle = 0
  let totalTick = 0
  cpus.forEach(cpu => {
    for (let type in cpu.times) {
      totalTick += cpu.times[type]
    }
    totalIdle += cpu.times.idle
  })
   return { idle: totalIdle / cpus.length, total: totalTick / cpus.length }
}
const start = getCpuUsage()