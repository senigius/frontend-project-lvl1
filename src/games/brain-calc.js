import askName from '../cli.js';
import game, {
  random, congrats,
  operandsForCalc, operationForCalc,
} from '../index.js';

const brainCalc = () => {
  const name = askName();
  let result = 0;
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const operator1 = random(1, 10); // рандомим два оператора
    const operator2 = random(1, 10);
    let operation = random(0, 2); // рандомим цифру для операнда от 0 до 2
    const answer = operandsForCalc(operation, operator1, operator2);
    operation = operationForCalc(operation);
    const task = `${operator1} ${operation} ${operator2}`; // для вывода задачи пользователю
    result += game(task, answer, name);
    if (result > 4) break;
  }
  congrats(result, name);
};
export default brainCalc;
