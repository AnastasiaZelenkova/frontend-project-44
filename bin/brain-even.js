import readlineSync from 'readline-sync';

const isEven = (n) => {
  if (n % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getRandomInt = (min, max) => {
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
};

const brainEven = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let result;
  let i = 0;
  while (i < 3) {
    const randomNum = getRandomInt(1, 50);
    const correctAnswer = isEven(randomNum);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      result = console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return result;
    }
  }
  result = console.log(`Congratulations, ${userName}!`);
  return result;
};

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
brainEven(name);
