import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  let name = readlineSync.question('May I have your name? ');
  if (name === '') {
    name = 'User';
  }
  console.log(`Hello, ${name}!`);
  return name;
};

export default greeting;
