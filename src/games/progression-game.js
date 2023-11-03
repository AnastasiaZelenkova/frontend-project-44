import { getGeneralLogic, getRandomInt } from '../index.js';

const rules = 'What number is missing in the progression?';
const minValue = 1;
const maxValue = 50;
const maxStep = 10;
const minLen = 5;
const maxLen = 11;

const getProgressionQuestAns = () => {
  const firstNum = getRandomInt(minValue, maxValue);
  const step = getRandomInt(minValue, maxStep);
  const lenProg = getRandomInt(minLen, maxLen);
  const result = [];
  for (let i = 0; i < lenProg; i += 1) {
    result.push(firstNum + (i * step));
  }
  const hiddenElemInd = getRandomInt(0, lenProg - 1);
  const correctAnswer = result[hiddenElemInd];
  result[hiddenElemInd] = '..';
  const question = result.join(' ');
  return [question, correctAnswer];
};

const playGameProg = () => {
  getGeneralLogic(rules, getProgressionQuestAns);
};

export default playGameProg;
