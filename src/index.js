import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) => {
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
};

export const generalLogic = (userName, [questiom, correctAnswer]) => {
  let result;
  console.log(`Question: ${questiom}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer == correctAnswer) {
    result = 'Correct!';
  } else {
    result = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
  }
  return result;
};
