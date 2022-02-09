import readLineSync from 'readline-sync';
import askName from './cli.js';

const congrats = (result, name) => {
  if (result === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

const game = (arr) => {
  const name = askName();
  // показываем правила
  console.log(arr[0]);
  let result = 0;
  for (let i = 1; i < 4; i += 1) {
    // показываем задачу
    console.log(`Question: ${arr[i][0]}`);
    const userAnswer = readLineSync.question('Your answer: '); // читаем ответ
    if (arr[i][1] === userAnswer) {
      console.log('Correct!');
      result += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${arr[i][1]}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  congrats(result, name);
};
export default game;

export const random = (min, max) => {
  const randomNum = Math.floor(min + Math.random() * (max + 1 - min));
  return randomNum;
};
