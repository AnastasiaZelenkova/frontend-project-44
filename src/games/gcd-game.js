import { getGeneralLogic, getRandomInt } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const minValue = 1;
const maxValue = 50;

const getGcd = (expression) => {
  const [a, b] = expression.split(' ');
  if (Number(a) === 0) {
    return b;
  }
  return getGcd(`${b % a} ${a}`);
};

const getGcdQuestAnsw = () => {
  const question = `${getRandomInt(minValue, maxValue)} ${getRandomInt(minValue, maxValue)}`;
  const correctAnswer = getGcd(question);
  return [question, correctAnswer];
};

const playBrainGcd = () => {
  getGeneralLogic(rules, getGcdQuestAnsw);
};

export default playBrainGcd;
