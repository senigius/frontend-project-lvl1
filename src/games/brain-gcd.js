import askName from '../cli.js';
import game, { random, congrats, findGCD } from '../index.js';

const brainGcd = () => {
  const name = askName();
  let result = 0;
  console.log('Find the greatest common divisor of given numbers');
  for (let i = 0; i < 3; i += 1) {
    const num1 = random(2, 20); // рандомим два числа
    const num2 = random(2, 10);
    const task = `${num1} ${num2}`; // для вывода задачи пользователю
    const answer = findGCD(num1, num2);
    result += game(task, answer, name);
    if (result > 4) break;
  }
  congrats(result, name);
};
export default brainGcd;
