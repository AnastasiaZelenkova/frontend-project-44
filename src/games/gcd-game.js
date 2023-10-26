import { generalLogic, getRandomInt } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const minValue = 1;
const maxValue = 50;

const gcd = (expression) => {
  const [a, b] = expression.split(' ');
  if (Number(a) === 0) {
    return b;
  }
  return gcd(`${b % a} ${a}`);
};

const getRandomGcd = (min, max) => {
  const result = `${getRandomInt(min, max)} ${getRandomInt(min, max)}`;
  return result;
};

const brainGcd = (userName) => {
  generalLogic(userName, rules, getRandomGcd, gcd, minValue, maxValue);
};

export default brainGcd;
