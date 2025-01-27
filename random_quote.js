#!/usr/bin/env node

const quotes = [
  "Stay hungry stay foolish",
  "The only way to do great work is to love what you do",
  "Life is what happens when you're busy making other plans",
  "You miss 100 percent of the shots you don’t take",
  "In the middle of difficulty lies opportunity"
]

const index = Math.floor(Math.random() * quotes.length)
console.log(quotes[index])
