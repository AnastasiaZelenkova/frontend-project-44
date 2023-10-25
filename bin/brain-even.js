#!/usr/bin/env node

import brainEven from '../src/games/even-game.js';
import greeting from '../src/cli.js';

const gameEven = () => {
  const name = greeting();
  brainEven(name);
};

gameEven();
