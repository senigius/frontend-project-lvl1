import askName from '../cli.js';
import game, { random } from '../index.js';

const brainGcd = () => {
  const name = askName();
  let result = 0;
  console.log('Find the greatest common divisor of given numbers');
  for (let i = 0; i < 3; i += 1) {
    let num1 = random(2, 50); // рандомим два числа
    let num2 = random(2, 100);
    const task = `${num1} ${num2}`; // для вывода задачи пользователю
    while (num1 !== num2) {
      if (num1 > num2) num1 -= num2;
      else num2 -= num1;
    }
    const answer = num1;
    result += game(task, answer, name);
    if (result > 4) break;
  }
  if (result === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default brainGcd;
