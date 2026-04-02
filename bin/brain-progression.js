#!/usr/bin/env node

import readline from 'readline';
import { randomInt } from 'crypto';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const generateProgression = (length = 10) => {
  const start = randomInt(1, 20);
  const step = randomInt(1, 10);
  return Array.from({ length }, (_, i) => start + i * step);
};

const hideElement = (progression, index) => {
  const hiddenProgression = [...progression];
  hiddenProgression[index] = '..';
  return hiddenProgression.join(' ');
};

const playGame = () => {
  console.log('What number is missing in the progression?');

  const progression = generateProgression();
  const hiddenIndex = randomInt(0, progression.length);
  const correctAnswer = progression[hiddenIndex];
  const question = hideElement(progression, hiddenIndex);

  rl.question(`Question: ${question}\nYour answer: `, (userAnswer) => {
    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
      rl.close();
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      rl.close();
    }
  });
};

playGame();