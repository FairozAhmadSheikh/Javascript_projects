const { execSync } = require("child_process")
try {
  const log = execSync("git log --pretty=format:'%an|%s'", { encoding: "utf8" })
  const lines = log.split("\n")
  const summary = {}

  lines.forEach(line => {
    const [author, message] = line.split("|")
    if (!summary[author]) summary[author] = []
    summary[author].push(message.trim())
     })
     bject.entries(summary).forEach(([author, messages]) => {
    console.log(`\n${author} (${messages.length} commits)`)
    messages.slice(0, 5).forEach(msg => {
      console.log(`- ${msg}`)
      })
  })
} catch {
  console.log("Not a valid Git repository or Git is not installed")
}