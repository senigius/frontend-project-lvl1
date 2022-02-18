import getRandomNumber from '../getRandomNumber.js';
import game, { numberOfRounds } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const brainEven = () => {
  const forGame = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const task = getRandomNumber(1, 50);
    const answer = isEven(task) ? 'yes' : 'no';
    forGame.push([task, answer]);
  }
  game(forGame, rules);
};
export default brainEven;
