#!/usr/bin/env node

import readlineSync from 'readline-sync'

function isEven(number) {
  return number % 2 === 0
}

function playRound() {
  const number = Math.floor(Math.random() * 100) + 1
  console.log(`Question: ${number}`)
  const userAnswer = readlineSync.question('Your answer: ')
  const correctAnswer = isEven(number) ? 'yes' : 'no'

  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log('Correct!')
    return true
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
    return false
  }
}

function main() {
  console.log('Welcome to the Brain Games!')
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!\n`)

  const roundsToWin = 3
  for (let i = 0; i < roundsToWin; i++) {
    if (!playRound()) {
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

main()
