import { getGeneralLogic, getRandomInt } from '../index.js';

const rules = 'What is the result of the expression?';
const minValue = 1;
const maxValue = 50;

const getCalcQuestAns = () => {
  const actions = '+-*';
  const firstNum = getRandomInt(minValue, maxValue);
  const secondNum = getRandomInt(minValue, maxValue);
  const action = actions[getRandomInt(0, actions.length - 1)];
  const question = `${firstNum} ${action} ${secondNum}`;
  let correctAnswer;
  if (action === '+') {
    correctAnswer = firstNum + secondNum;
  } else if (action === '-') {
    correctAnswer = firstNum - secondNum;
  } else if (action === '*') {
    correctAnswer = firstNum * secondNum;
  }
  return [question, correctAnswer];
};

const playBrainCalc = () => {
  getGeneralLogic(rules, getCalcQuestAns);
};

export default playBrainCalc;
