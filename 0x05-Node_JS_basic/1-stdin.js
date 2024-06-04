const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (input) => {
  rl.output.write(`Your name is: ${chunk}`);
});

rl.on('close', () => {
  rl.output.write('This important software is now closing\n');
});

