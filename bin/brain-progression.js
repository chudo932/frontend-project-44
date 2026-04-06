#!/usr/bin/env node

import readline from 'readline'
import { randomInt } from 'crypto'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const MAX_ROUNDS = 3

const generateProgression = (length = 10) => {
  const start = randomInt(1, 20)
  const step = randomInt(1, 10)
  return Array.from({ length }, (_, i) => start + i * step)
}

const hideElement = (progression, index) => {
  const hiddenProgression = [...progression]
  hiddenProgression[index] = '..'
  return hiddenProgression.join(' ')
}

const playGame = () => {
  console.log('Welcome to the Brain Games!')
  console.log('What number is missing in the progression?')
  console.log()

  rl.question('May I have your name? ', (userName) => {
    console.log(`Hello, ${userName}!`)
    console.log()

    let round = 0

    const playRound = () => {
      if (round >= MAX_ROUNDS) {
        console.log(`Congratulations, ${userName}!`)
        rl.close()
        return
      }

      const progression = generateProgression()
      const hiddenIndex = randomInt(0, progression.length)
      const correctAnswer = progression[hiddenIndex]
      const question = hideElement(progression, hiddenIndex)

      console.log(`Question: ${question}`)

      rl.question('Your answer: ', (userAnswer) => {
        if (parseInt(userAnswer, 10) === correctAnswer) {
          console.log('Correct!')
          round++
          playRound()
        } else {
          console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
          console.log(`Let's try again, ${userName}!`)
          rl.close()
        }
      })
    }

    playRound()
  })
}

playGame()
