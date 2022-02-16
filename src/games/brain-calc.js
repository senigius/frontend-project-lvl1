import getRandomNumber from '../getRandomNumber.js';
import game, { numberOfGames } from '../index.js';

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
  const rules = 'What is the result of the expression?';
  const forGame = [];
  for (let i = 0; i < numberOfGames; i += 1) {
    const operator1 = getRandomNumber(1, 10); // рандомим два оператора
    const operator2 = getRandomNumber(1, 10);
    const operation = arr[getRandomNumber(0, arr.length - 1)]; // достаём случайную операцию
    const answer = operandsForCalc(operation, operator1, operator2);
    const task = `${operator1} ${operation} ${operator2}`; // для вывода задачи пользователю
    forGame.push([task, String(answer)]);
  }
  game(forGame, rules);
};
export default brainCalc;
