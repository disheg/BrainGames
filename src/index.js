import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const numberOfQuestions = 3;

export default (description, genGameData) => {
  console.log('Welcome to the Brain-games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(description);
  const runRound = (num) => {
    if (num === 0) {
      console.log(`Congratulations, ${userName}`);
      return;
    }
    const gameData = genGameData();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }

    runRound(num - 1);
  };
  runRound(numberOfQuestions);
};
