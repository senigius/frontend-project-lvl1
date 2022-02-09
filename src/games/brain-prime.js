import game, { random } from '../index.js';

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
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const forGame = [rules];
  for (let i = 0; i < 3; i += 1) {
    const task = random(2, 50); // выбираем число
    const answer = isPrime(task);
    forGame.push([task, String(answer)]);
  }
  game(forGame);
};
export default brainPrime;
