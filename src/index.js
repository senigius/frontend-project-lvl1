import readLineSync from 'readline-sync';

export const numberOfGames = 3;

const game = (arr, rules) => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  // показываем правила
  console.log(rules);
  for (let i = 0; i < numberOfGames; i += 1) {
    const question = arr[i][0];
    const answer = arr[i][1];
    // показываем задачу
    console.log(`Question: ${question}`);
    const userAnswer = readLineSync.question('Your answer: '); // читаем ответ
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${arr[i][1]}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default game;

export const random = (min, max) => {
  const randomNum = Math.floor(min + Math.random() * (max + 1 - min));
  return randomNum;
};
