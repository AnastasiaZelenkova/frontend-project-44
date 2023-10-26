import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) => {
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
};

export const generalLogic = (userName, gameRules, funqQuestion, funqAnswer, minValue, maxValue) => {
  console.log(gameRules);
  let i = 0;
  while (i < 3) {
    const question = funqQuestion(minValue, maxValue);
    const correctAnswer = funqAnswer(question);
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
