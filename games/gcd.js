const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const findGCD = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRound = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGCD(num1, num2));

  return { question, correctAnswer };
};

const getDescription = () => 'Find the greatest common divisor of given numbers.';

export default { getDescription, generateRound };