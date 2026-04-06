#!/usr/bin/env node

import readline from 'readline';
import { randomInt } from 'crypto';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateQuestion = () => {
  const number = randomInt(2, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { number, correctAnswer };
};

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number is prime, otherwise answer "no".');
  console.log(); // Пустая строка для разделения

  rl.question('May I have your name? ', (userName) => {
    console.log(`Hello, ${userName}!`);
    console.log(); // Пустая строка для разделения

    const { number, correctAnswer } = generateQuestion();

    rl.question(`Question: ${number}\nYour answer: `, (userAnswer) => {
      const normalizedUserAnswer = userAnswer.trim().toLowerCase();

      if (normalizedUserAnswer === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
      }
      rl.close();
    });
  });
};

playGame();
