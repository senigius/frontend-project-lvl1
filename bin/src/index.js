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
  console.log(`You're wrong, mister ${name} :<. Correct answer is '${answer}'\nTry again!`);
  return 5;
};
export default game;
