#!/usr/bin/env node
import readLineSync from 'readline-sync';
import askName from './src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askName();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const arr = [13, 14, 15];
let answer = 0;
let result = 0;
for (let i = 0; i < 3; i += 1) {
  console.log(`Question: ${arr[i]}`);
  answer = readLineSync.question('Your answer: ');
  if ((arr[i] % 2 !== 0) && (answer === 'yes')) {
    console.log('Correct!');
    result += 1;
  } else if ((arr[i] % 2 === 0) && (answer === 'no')) {
    console.log('Correct!');
    result += 1;
  } else {
    console.log(`You're wrong, mister ${name}`);
    break;
  }
}
if (result === 3) {
  console.log(`Congrats, ${name}`);
}
