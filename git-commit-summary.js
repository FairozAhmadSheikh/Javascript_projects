const { execSync } = require("child_process")
try {
  const log = execSync("git log --pretty=format:'%an|%s'", { encoding: "utf8" })
  const lines = log.split("\n")