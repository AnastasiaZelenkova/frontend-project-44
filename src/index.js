import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};


export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  let name = readlineSync.question('May I have your name? ');
  if (!name) {
    name = 'User';
  }
  console.log(`Hello, ${name}!`);
  return name;
};


export const getGeneralLogic = (gameRules, getQuestionAnswer) => {
  const userName = greetUser();
  console.log(gameRules);
  let i = 0;
  while (i < 3) {
    const [question, correctAnswer] = getQuestionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toString() === correctAnswer.toString()) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
