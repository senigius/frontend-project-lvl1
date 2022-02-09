import game, { random } from '../index.js';

const operandsForCalc = (operation, num1, num2) => {
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

const operationForCalc = (operation) => {
  const arr = ['+', '-', '*'];
  return arr[operation];
};

const brainCalc = () => {
  const rules = 'What is the result of the expression?';
  const forGame = [rules];
  for (let i = 0; i < 3; i += 1) {
    const operator1 = random(1, 10); // рандомим два оператора
    const operator2 = random(1, 10);
    let operation = random(0, 2); // рандомим цифру для операнда от 0 до 2
    const answer = operandsForCalc(operation, operator1, operator2);
    operation = operationForCalc(operation);
    const task = `${operator1} ${operation} ${operator2}`; // для вывода задачи пользователю
    forGame.push([task, String(answer)]);
  }
  game(forGame);
};
export default brainCalc;
