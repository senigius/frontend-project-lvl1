import getRandomNumber from '../getRandomNumber.js';
import game, { numberOfGames } from '../index.js';

const makeProgression = (start, step, length) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(start + step * i);
  }
  return arr;
};

const brainProgression = () => {
  const rules = 'What number is missing in the progression?';
  const forGame = [];
  for (let i = 0; i < numberOfGames; i += 1) {
    const start = getRandomNumber(1, 15);
    const step = getRandomNumber(2, 4);
    const length = getRandomNumber(8, 13);
    const arr = makeProgression(start, step, length);
    const missingNum = [arr.length - getRandomNumber(1, arr.length - 1)];
    const answer = arr[missingNum];
    arr[missingNum] = '..';
    const task = arr.join(' ');
    forGame.push([task, String(answer)]);
  }
  game(forGame, rules);
};
export default brainProgression;
