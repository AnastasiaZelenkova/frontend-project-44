#!/usr/bin/env node

import brainCalc from '../src/games/calc-game.js';
import greeting from '../src/cli.js';

const gameCalc = () => {
  const name = greeting();
  brainCalc(name);
};

gameCalc();
