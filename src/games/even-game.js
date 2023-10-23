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
    const preresult = generalLogic(userName, [randomInt, correctAns]);
    console.log(preresult);
    if (preresult === 'Correct!') {
      i += 1;
    } else {
      return;
    }
  }
  const result = console.log(`Congratulations, ${userName}!`);
  return result;
};

export default brainEven;
