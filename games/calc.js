const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const OPERATIONS = ['+', '-', '*']

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateRound = () => {
  const num1 = getRandomInt(1, 20)
  const num2 = getRandomInt(1, 20)
  const operator = OPERATIONS[getRandomInt(0, OPERATIONS.length - 1)]

  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = String(calculate(num1, num2, operator))

  return { question, correctAnswer }
}

const getDescription = () => 'What is the result of the expression?'

export default { getDescription, generateRound }
