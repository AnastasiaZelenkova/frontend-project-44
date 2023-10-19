import readlineSync from 'readline-sync';
import brainEven from '../src/games/even-game.js';

const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  brainEven(name);
};

gameEven();
