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

export const operandsForCalc = (operation, num1, num2) => {
  let answer;
  switch (operation) { // выбор операнда в зависимости от цифры
    case 0:
      answer = num1 + num2;
      break;
    case 1:
      answer = num1 - num2;
      break;
    default:
      // eslint-disable-next-line no-unused-vars
      answer = num1 * num2;
      break;
  }
  return answer;
};

export const operationForCalc = (operation) => {
  const arr = ['+', '-', '*'];
  return arr[operation];
};

export const pullNumber = (arr) => {
  const missingNum = [arr.length - random(1, arr.length)];
  const answer = arr[missingNum];
  // eslint-disable-next-line no-param-reassign
  arr[missingNum] = '..';
  return answer;
};

export const makeArray = () => {
  const arr = [];
  // выбираем число, на которое увеличивается  последовательность
  const randomProgressionNum = random(2, 5);
  // делаем и заполняем массив, первое число выбирается случайно
  for (let j = 0; j < random(8, 13); j += 1) {
    if (arr.length === 0) arr.push(random(1, 15));
    arr.push(arr[j] + randomProgressionNum);
  }
  return arr;
};

export const findGCD = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;
  while (num1 !== num2) { // ищем НОД
    if (num1 > num2) num1 -= num2;
    else num2 -= num1;
  }
  return num1;
};

export const isPrime = (num) => {
  let answer = 'yes';
  // проверяем является ли число простым
  for (let j = 2; j < num; j += 1) {
    if (num % j === 0) {
      // eslint-disable-next-line no-unused-vars
      answer = 'no';
      break;
    }
  }
  return answer;
};
