const https = require("https")
const { parse } = require("node-html-parser")
const args = process.argv.slice(2)
const feedUrl = args[0]