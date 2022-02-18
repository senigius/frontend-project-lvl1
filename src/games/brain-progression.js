import getRandomNumber from '../getRandomNumber.js';
import game, { numberOfRounds } from '../index.js';

const rules = 'What number is missing in the progression?';

const makeProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const brainProgression = () => {
  const forGame = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const start = getRandomNumber(1, 15);
    const step = getRandomNumber(2, 4);
    const length = getRandomNumber(8, 13);
    const progression = makeProgression(start, step, length);
    const missingNum = getRandomNumber(0, progression.length - 1);
    const answer = progression[missingNum];
    progression[missingNum] = '..';
    const task = progression.join(' ');
    forGame.push([task, String(answer)]);
  }
  game(forGame, rules);
};
export default brainProgression;
