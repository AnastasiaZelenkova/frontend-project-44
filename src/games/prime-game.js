import { getGeneralLogic, getRandomInt } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minValue = 2;
const maxValue = 50;

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeQuestAnsw = () => {
  const question = getRandomInt(minValue, maxValue);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playBrainPrime = () => {
  getGeneralLogic(rules, getPrimeQuestAnsw);
};

export default playBrainPrime;
