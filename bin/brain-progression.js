#!/usr/bin/env node

import brainProg from '../src/games/progression-game.js';
import greeting from '../src/cli.js';

const gameProg = () => {
  const name = greeting();
  brainProg(name);
};

gameProg();
