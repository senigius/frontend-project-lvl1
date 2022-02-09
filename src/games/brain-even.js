import game, { random } from '../index.js';

const brainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  let answer = '';
  const forGame = [rules];
  for (let i = 0; i < 3; i += 1) {
    const task = random(1, 50);
    // если число делится на 2 без остатка оно четное
    if (task % 2 === 0) answer = 'yes';
    else answer = 'no'; // если нет, то ответ нет
    forGame.push([task, answer]);
  }
  game(forGame);
};
export default brainEven;
