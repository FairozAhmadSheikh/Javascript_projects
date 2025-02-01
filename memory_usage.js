const os = require("os")
const total = os.totalmem()
const free = os.freemem()
const used = total - free
const percent = (used / total) * 100