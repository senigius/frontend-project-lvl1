import game, { random, numberOfGames } from '../index.js';

const pullNumber = (arr) => {
  const missingNum = [arr.length - random(1, arr.length)];
  const answer = arr[missingNum];
  // eslint-disable-next-line no-param-reassign
  arr[missingNum] = '..';
  return answer;
};

const makeArray = () => {
  const arr = [];
  // выбираем число, на которое увеличивается  последовательность
  const randomProgressionNum = random(2, 5);
  // делаем и заполняем массив, первое число выбирается случайно
  for (let j = 0; j < random(8, 13); j += 1) {
    if (arr.length === 0) arr.push(random(1, 15));
    arr.push(arr[j] + randomProgressionNum);
  }
  return arr;
};

const brainProgression = () => {
  const rules = 'What number is missing in the progression?';
  const forGame = [];
  for (let i = 0; i < numberOfGames; i += 1) { // начинаем цикл игр
    const arr = makeArray();
    // достаём случайное число и заменяем его на ..
    const answer = pullNumber(arr);
    const task = arr.join(' '); // для вывода задачи пользователю
    forGame.push([task, String(answer)]);
  }
  game(forGame, rules);
};
export default brainProgression;
