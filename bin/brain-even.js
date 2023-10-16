import readlineSync from 'readline-sync';

const isEven = (n) => {
  if (n % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const brainEven = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const randomNum = Math.floor(Math.random() * (50 - 1)) + 1;
    const correctAnswer = isEven(randomNum);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

console.log('Welcome to the Brain Games!');
brainEven();
