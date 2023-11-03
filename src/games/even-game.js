import { getGeneralLogic, getRandomInt } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const minValue = 1;
const maxValue = 50;

const isEven = (n) => {
  if (n % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getEvenQuestAnsw = () => {
  const question = getRandomInt(minValue, maxValue);
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

const playBrainEven = () => {
  getGeneralLogic(rules, getEvenQuestAnsw);
};

export default playBrainEven;
