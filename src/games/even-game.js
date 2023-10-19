import { generalLogic, getRandomInt } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const minValue = 1;
const maxValue = 50;

const isEven = (n) => {
  if (n % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const brainEven = (userName) => {
  console.log(rules);
  let i = 0;
  while (i < 3) {
    const randomInt = getRandomInt(minValue, maxValue);
    const correctAns = isEven(randomInt);
    const [question, correctAnswer] = [randomInt, correctAns];
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

export default brainEven;
