import { getGeneralLogic, getRandomInt } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minValue = 2;
const maxValue = 50;

const getPrimeQuestAnsw = () => {
  const question = getRandomInt(minValue, maxValue);
  let correctAnswer = 'yes';
  for (let i = 2; i <= Math.sqrt(question); i += 1) {
    if (question % i === 0) {
      correctAnswer = 'no';
    }
  }

  return [question, correctAnswer]
};

const playBrainPrime = (userName) => {
  getGeneralLogic(rules, getPrimeQuestAnsw);
};

export default playBrainPrime;
