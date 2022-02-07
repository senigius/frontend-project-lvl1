import readLineSync from 'readline-sync';

const game = (task, answer, name) => {
  console.log(`Question: ${task}`);
  const userAnswer = readLineSync.question('Your answer: '); // читаем ответ
  if (answer === Number(userAnswer)) {
    console.log('Correct!');
    return 1;
  }
  if (answer === userAnswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
  return 5;
};
export default game;

export const random = (min, max) => {
  const randomNum = Math.floor(min + Math.random() * (max + 1 - min));
  return randomNum;
};

export const congrats = (result, name) => {
  if (result === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
