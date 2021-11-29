const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  alert: 'alert> '
});

rl.alert();

rl.on('line', (line) => {
  console.log(line);
  rl.alert();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});


// simulate external input, and write to alert>
function myFunc() {
  rl.write("Digite alguma coisa 😄");
}
setTimeout(myFunc, 5000); 