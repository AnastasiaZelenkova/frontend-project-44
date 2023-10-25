import { generalLogic, getRandomInt } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minValue = 2;
const maxValue = 50;

const isPrime = (numChek) => {
  for (let i = 2; i <= Math.sqrt(numChek); i += 1) {
    if (numChek % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const brainPrime = (userName) => {
    generalLogic(userName, rules, getRandomInt, isPrime , minValue, maxValue);
};

export default brainPrime;
