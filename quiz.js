const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const questions = [
  {
    question: "What is the capital of France?",
    options: {
      a: "Berlin",
      b: "Paris",
      c: "Madrid",
      d: "Rome",
    },
    answer: "b",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: {
      a: "Earth",
      b: "Mars",
      c: "Jupiter",
      d: "Saturn",
    },
    answer: "b",
  },
  