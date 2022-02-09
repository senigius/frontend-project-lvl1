import game, { random } from '../index.js';

const findGCD = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;
  while (num1 !== num2) { // ищем НОД
    if (num1 > num2) num1 -= num2;
    else num2 -= num1;
  }
  return num1;
};

const brainGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers';
  const forGame = [rules];
  for (let i = 0; i < 3; i += 1) {
    const num1 = random(2, 20); // рандомим два числа
    const num2 = random(2, 10);
    const task = `${num1} ${num2}`; // для вывода задачи пользователю
    const answer = findGCD(num1, num2);
    forGame.push([task, String(answer)]);
  }
  game(forGame);
};
export default brainGcd;
