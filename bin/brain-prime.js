#!/usr/bin/env node

import brainPrime from '../src/games/prime-game.js';
import greeting from '../src/cli.js';

const gamePrime = () => {
  const name = greeting();
  brainPrime(name);
};

gamePrime();
