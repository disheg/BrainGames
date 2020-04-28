import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const numberOfQuestions = 3;

export default (description, runGame) => {
  console.log('Welcome to the Brain-games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(description);
  const runQuestion = (num) => {
    if (num === 0) {
      console.log(`Congratulations, ${userName}`);
      return true;
    }
    const pair = runGame();
    const question = car(pair);
    const correctAnswer = cdr(pair);
    const answer = readlineSync.question(`Question: ${question} \nYour answer: `);

    if (answer === correctAnswer) console.log('Correct!');
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${userName}`);
      return false;
    }

    return runQuestion(num - 1);
  };
  runQuestion(numberOfQuestions);
};
