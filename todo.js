

const tasks = [];

const [,, command, ...args] = process.argv;

function listTasks() {
  if (tasks.length === 0) {
    console.log("✅ No tasks yet!");
  } else {
    console.log("📋 Tasks:");
    tasks.forEach((t, i) => {
      console.log(`${i + 1}. [${t.done ? "✅" : "❌"}] ${t.text}`);
    });
  }
}