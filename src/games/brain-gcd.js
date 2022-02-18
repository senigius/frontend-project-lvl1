import getRandomNumber from '../getRandomNumber.js';
import game, { numberOfRounds } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers';
// Алгоритм Евклида
const findGCD = (x, y) => (x !== 0 ? findGCD(y % x, x) : y);

const brainGcd = () => {
  const forGame = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const num1 = getRandomNumber(2, 20); // рандомим два числа
    const num2 = getRandomNumber(2, 10);
    const task = `${num1} ${num2}`; // для вывода задачи пользователю
    const answer = findGCD(num1, num2);
    forGame.push([task, String(answer)]);
  }
  game(forGame, rules);
};
export default brainGcd;
