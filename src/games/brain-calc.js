import getRandomNumber from '../getRandomNumber.js';
import game, { numberOfRounds } from '../index.js';

const rules = 'What is the result of the expression?';

const operandsForCalc = (operation, num1, num2) => {
  switch (operation) { // выбор операнда в зависимости от цифры
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const arr = ['+', '-', '*']; // массив с операциями

const brainCalc = () => {
  const forGame = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const num1 = getRandomNumber(1, 10); // рандомим два оператора
    const num2 = getRandomNumber(1, 10);
    const operation = arr[getRandomNumber(0, arr.length - 1)]; // достаём случайную операцию
    const answer = operandsForCalc(operation, num1, num2);
    const task = `${num1} ${operation} ${num2}`; // для вывода задачи пользователю
    forGame.push([task, String(answer)]);
  }
  game(forGame, rules);
};
export default brainCalc;
