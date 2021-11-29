const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'prompt> '
});

rl.prompt();

rl.on('line', (line) => {
  console.log(line);
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});


// simulate external input, and write to prompt>
function myFunc() {
  rl.write("Digite alguma coisa 😄");
}
setTimeout(myFunc, 5000); 