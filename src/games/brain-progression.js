import askName from '../cli.js';
import game, { congrats, pullNumber, makeArray } from '../index.js';

const brainProgression = () => {
  const name = askName();
  let result = 0;
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) { // начинаем цикл игр
    const arr = makeArray();
    // достаём случайное число и заменяем его на ..
    const answer = pullNumber(arr);
    const task = arr.join(' '); // для вывода задачи пользователю
    result += game(task, answer, name);
    if (result > 4) break;
  }
  congrats(result, name);
};
export default brainProgression;
