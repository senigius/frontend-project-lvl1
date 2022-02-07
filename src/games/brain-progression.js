import askName from '../cli.js';
import game, { random } from '../index.js';

const brainProgression = () => {
  const name = askName();
  let result = 0;
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) { // начинаем цикл игр
    const arr = [];
    // выбираем число, на которое увеличивается  последовательность
    const randomProgressionNum = random(2, 5);
    // делаем и заполняем массив, первое число выбирается случайно
    for (let j = 0; j < random(8, 13); j += 1) {
      if (arr.length === 0) arr.push(random(1, 15));
      arr.push(arr[j] + randomProgressionNum);
    }
    // достаём случайное число
    const missingNum = [arr.length - random(1, arr.length)];
    const answer = arr[missingNum];
    arr[missingNum] = '..';
    const task = arr.join(' '); // для вывода задачи пользователю
    result += game(task, answer, name);
    if (result > 4) break;
  }
  if (result === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default brainProgression;
