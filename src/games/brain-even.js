import getRandomNumber from '../getRandomNumber.js';
import game, { numberOfGames } from '../index.js';

const isEven = (num) => num % 2 === 0;

const brainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const forGame = [];
  for (let i = 0; i < numberOfGames; i += 1) {
    let answer = 'no';
    const task = getRandomNumber(1, 50);
    if (isEven(task)) answer = 'yes';
    forGame.push([task, answer]);
  }
  game(forGame, rules);
};
export default brainEven;
