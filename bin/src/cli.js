import readLineSync from 'readline-sync';
export const askName = (name) => {
    name = readLineSync.question('Please, tell me your name: ');
    if (name === '') return 'anon';
    return name;
};