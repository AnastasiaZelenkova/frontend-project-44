import { generalLogic, getRandomInt } from '../index.js';

const getRandomExpression = (min, max) => {
  const actions = '+-*';
  const firstNum = getRandomInt(min, max);
  const secondNum = getRandomInt(min, max);
  const action = actions[getRandomInt(0, actions.length - 1)];
  const result = `${firstNum} ${action} ${secondNum}`;
  return result;
};

const brainCalc = (userName) => {
  console.log('What is the result of the expression?');
  let i = 0;
  while (i < 3) {
    const randomExp = getRandomExpression(1, 50);
    const correctAns = eval(randomExp);
    const [question, correctAnswer] = [randomExp, correctAns];
    const preresult = generalLogic(userName, [question, correctAnswer]);
    if (preresult === 'Correct!') {
      console.log(preresult);
      i += 1;
    } else {
      return console.log(preresult);
    }
  }
  const result = console.log(`Congratulations, ${userName}!`);
  return result;
};

export default brainCalc;
