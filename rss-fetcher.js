const https = require("https")
const { parse } = require("node-html-parser")
const args = process.argv.slice(2)
const feedUrl = args[0]
if (!feedUrl || !feedUrl.startsWith("http")) {
  console.log("Usage: rss-fetcher.js <rss-feed-url>")
  process.exit(1)
}
https.get(feedUrl, res => {
  let data = ""

  res.on("data", chunk => {
    data += chunk
  })
  res.on("end", () => {
    try {
      const root = parse(data)
      const items = root.querySelectorAll("item")
      items.slice(0, 5).forEach(item => {
        const title = item.querySelector("title")?.text
        const link = item.querySelector("link")?.text
        console.log(`- ${title}\n  ${link}`)