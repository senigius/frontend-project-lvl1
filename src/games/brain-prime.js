import getRandomNumber from '../getRandomNumber.js';
import game, { numberOfGames } from '../index.js';

const isPrime = (num) => {
  // проверяем является ли число простым
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const forGame = [];
  for (let i = 0; i < numberOfGames; i += 1) {
    const task = getRandomNumber(2, 50); // выбираем число
    const answer = isPrime(task) ? 'yes' : 'no';
    forGame.push([task, String(answer)]);
  }
  game(forGame, rules);
};
export default brainPrime;
