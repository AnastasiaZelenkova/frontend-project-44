import { getGeneralLogic, getRandomInt } from '../index.js';

const rules = 'What is the result of the expression?';
const minValue = 1;
const maxValue = 50;

const calculate = (num1, num2, sign) => {
  let result;
  switch (sign) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      break;
  }
  return result;
};

const getCalcQuestAns = () => {
  const actions = '+-*';
  const firstNum = getRandomInt(minValue, maxValue);
  const secondNum = getRandomInt(minValue, maxValue);
  const action = actions[getRandomInt(0, actions.length - 1)];
  const question = `${firstNum} ${action} ${secondNum}`;
  const correctAnswer = calculate(firstNum, secondNum, action);
  return [question, correctAnswer];
};

const playBrainCalc = () => {
  getGeneralLogic(rules, getCalcQuestAns);
};

export default playBrainCalc;
