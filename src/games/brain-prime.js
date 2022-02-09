import askName from '../cli.js';
import game, { random, congrats } from '../index.js';

const isPrime = (num) => {
  let answer = 'yes';
  // проверяем является ли число простым
  for (let j = 2; j < num; j += 1) {
    if (num % j === 0) {
      // eslint-disable-next-line no-unused-vars
      answer = 'no';
      break;
    }
  }
  return answer;
};

const brainPrime = () => {
  const name = askName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let result = 0;
  for (let i = 0; i < 3; i += 1) {
    const task = random(2, 50); // выбираем число
    const answer = isPrime(task);
    result += game(task, answer, name);
    if (result > 4) break;
  }
  congrats(result, name);
};
export default brainPrime;
