#!/usr/bin/env node
import askName from '../src/cli.js';
import game from '../src/index.js';

const random = (min, max) => {
  const randomNum = Math.floor(min + Math.random() * (max + 1 - min));
  return randomNum;
};
const name = askName();
let result = 0;
console.log('What number is missing in the progression?');
for (let i = 0; i < 3; i += 1) {
  const arr = [];
  const randomProgressionNum = random(2, 5);
  for (let j = 0; j < random(8, 13); j += 1) {
    if (arr.length === 0) arr.push(random(1, 15));
    arr.push(arr[j] + randomProgressionNum);
  }
  const missingNum = [arr.length - random(1, arr.length)];
  const answer = arr[missingNum];
  arr[missingNum] = '..';
  const task = arr.join(' '); // для вывода задачи пользователю
  result += game(task, answer, name);
  if (result > 4) break;
}
if (result === 3) {
  console.log(`Congrats, ${name}`);
}
