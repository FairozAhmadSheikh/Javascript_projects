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
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: {
      a: "Harper Lee",
      b: "Mark Twain",
      c: "George Orwell",
      d: "J.K. Rowling",
    },
    answer: "a",
  },
  ];
  let score = 0;
let index = 0;

function askQuestion() {
  if (index >= questions.length) {
    console.log(`\n✅ Quiz complete! Your score: ${score}/${questions.length}`);
    rl.close();
    return;
  }
 const q = questions[index];
  console.log(`\nQ${index + 1}: ${q.question}`);
  for (const key in q.options) {
    console.log(`  ${key}) ${q.options[key]}`);
  }

  rl.question("Your answer (a/b/c/d): ", (userInput) => {
    if (userInput.toLowerCase() === q.answer) {
      console.log("🎉 Correct!");
      score++;
    } else {
      console.log(`❌ Wrong! Correct answer: ${q.answer}) ${q.options[q.answer]}`);
    }
    index++;
    askQuestion();
  });
}