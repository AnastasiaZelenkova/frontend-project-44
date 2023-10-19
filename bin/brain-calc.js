import readlineSync from 'readline-sync';
import brainCalc from '../src/games/calc-game.js';

const gameCalc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  brainCalc(name);
};

gameCalc();
