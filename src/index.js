import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const MAX_ROUNDS = 3;

const runGame = (gameModule) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameModule.getDescription());
  console.log();

  rl.question('May I have your name? ', (userName) => {
    console.log(`Hello, ${userName}!`);
    console.log();

    let round = 0;

    const playRound = () => {
      if (round >= MAX_ROUNDS) {
        console.log(`Congratulations, ${userName}!`);
        rl.close();
        return;
      }

      const { question, correctAnswer } = gameModule.generateRound();
      console.log(`Question: ${question}`);

      rl.question('Your answer: ', (userAnswer) => {
        if (userAnswer.trim() === correctAnswer) {
          console.log('Correct!');
          round++;
          playRound();
        } else {
          console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
          console.log(`Let's try again, ${userName}!`);
          rl.close();
        }
      });
    };

    playRound();
  });
};

export { runGame };