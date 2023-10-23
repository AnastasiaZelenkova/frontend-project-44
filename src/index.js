import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) => {
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
};

export const generalLogic = (userName, gameRules, funqForQuestiom, funqForCorrectAnswer, minValue, maxValue) => {
  console.log(gameRules);
  let i = 0;
  while (i < 3) {
    const question = funqForQuestiom(minValue, maxValue);
    const correctAnswer = funqForCorrectAnswer(question);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer == correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
