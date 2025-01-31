const os = require("os")
const uptimeSeconds = os.uptime()
const hours = Math.floor(uptimeSeconds / 3600)
const minutes = Math.floor((uptimeSeconds % 3600) / 60)
const seconds = uptimeSeconds % 60