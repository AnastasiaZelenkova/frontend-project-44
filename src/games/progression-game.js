import { generalLogic, getRandomInt } from '../index.js';

const rules = 'What number is missing in the progression?';
const minValue = 1;
const maxValue = 50;
const maxStep = 10;

const getRandomProgression = (min, max) => {
  const firstNum = getRandomInt(min, max);
  const step = getRandomInt(min, maxStep);
  const lenProg = getRandomInt(5, 10);
  const result = [];
  for (let i = 0; i < lenProg; i += 1) {
    result.push(firstNum + (i * step));
  }
  const hiddenElemInd = getRandomInt(0, lenProg - 1);
  result[hiddenElemInd] = '..';
  return result.join(' ');
};

const findHinddenElem = (progression) => {
  const progresArr = progression.split(' ');
  const lenArr = progresArr.length;
  const hiddenElemInd = progresArr.indexOf('..');
  let hiddenElem;
  if (hiddenElemInd === 0) {
    hiddenElem = 2 * Number(progresArr[1]) - Number(progresArr[2]);
  } else if (hiddenElemInd === lenArr - 1) {
    hiddenElem = 2 * Number(progresArr[lenArr - 2]) - Number(progresArr[lenArr - 3]);
  } else {
    hiddenElem = (Number(progresArr[hiddenElemInd - 1])
          + Number(progresArr[hiddenElemInd + 1])) / 2;
  }
  return hiddenElem;
};

const brainProg = (userName) => {
  generalLogic(userName, rules, getRandomProgression, findHinddenElem, minValue, maxValue);
};

export default brainProg;
