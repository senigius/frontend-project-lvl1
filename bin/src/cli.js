import readLineSync from 'readline-sync';

const askName = (name) => {
  let yourName = name;
  yourName = readLineSync.question('Please, tell me your name: ');
  if (yourName === '') return 'anon';
  return yourName;
};
export default askName;
