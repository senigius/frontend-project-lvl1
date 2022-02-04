#!/usr/bin/env node
import askName from '../src/cli.js';
import game from '../src/index.js';

const name = askName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let answer = '';
const arr = [15, 6, 7];
let result = 0;
for (let i = 0; i < 3; i += 1) {
  const task = arr[i];
  if (task % 2 === 0) answer = 'no';
  else answer = 'yes';
  result += game(task, answer, name);
  if (result > 4) break;
}
if (result === 3) {
  console.log(`Congratulation, ${name}!`);
}
