const https = require("https")
const { parse } = require("node-html-parser")
const args = process.argv.slice(2)
const feedUrl = args[0]
if (!feedUrl || !feedUrl.startsWith("http")) {
  console.log("Usage: rss-fetcher.js <rss-feed-url>")
  process.exit(1)
}