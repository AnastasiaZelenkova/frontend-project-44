#!/usr/bin/env node

import brainGcd from '../src/games/gcd-game.js';
import greeting from '../src/cli.js';

const gameGcd = () => {
  const name = greeting();
  brainGcd(name);
};

gameGcd();
