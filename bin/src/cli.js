import readLineSync from 'readline-sync';

const askName = () => {
  console.log('Welcome to the Brain Games!');
  let name = readLineSync.question('Please, tell me your name: ');
  if (name === '') name = 'anon';
  console.log(`Hello, ${name}!`);
  return name;
};
export default askName;
