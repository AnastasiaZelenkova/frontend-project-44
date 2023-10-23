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
  generalLogic(userName, rules, getRandomInt, isEven, minValue, maxValue);
};

export default brainEven;
