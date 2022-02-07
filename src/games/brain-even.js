import askName from '../cli.js';
import game, { random, congrats } from '../index.js';

const brainEven = () => {
  const name = askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let answer = '';
  let result = 0;
  for (let i = 0; i < 3; i += 1) {
    const task = random(1, 50);
    // если число делится на 2 без остатка оно четное
    if (task % 2 === 0) answer = 'yes';
    else answer = 'no'; // если нет, то ответ нет
    result += game(task, answer, name);
    if (result > 4) break;
  }
  congrats(result, name);
};
export default brainEven;
