const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (input) => {
  rl.stdout.write(`Your name is: ${input}`);
});

rl.on('close', () => {
  rl.stdout.write('This important software is now closing\n');
});

module.exports = rl;
