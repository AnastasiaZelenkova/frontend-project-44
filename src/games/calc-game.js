import { generalLogic, getRandomInt } from '../index.js';

const rules = 'What is the result of the expression?';
const minValue = 1;
const maxValue = 50;

const getRandomExpression = (min, max) => {
  const actions = '+-*';
  const firstNum = getRandomInt(min, max);
  const secondNum = getRandomInt(min, max);
  const action = actions[getRandomInt(0, actions.length - 1)];
  const result = `${firstNum} ${action} ${secondNum}`;
  return result;
};

const brainCalc = (userName) => {
  generalLogic(userName, rules, getRandomExpression, eval, minValue, maxValue);
};

export default brainCalc;
