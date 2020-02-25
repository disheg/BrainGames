import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const numberOfQuestions = 3;

const greeting = () => {
  console.log('Welcome to the Brain-games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export default (description, runGame) => {
  if (!description) {
    greeting();
    return;
  }
  const userName = greeting();
  console.log(description);
  const runQuestion = (num) => {
    if (num === 0) { return console.log(`Congratulations, ${userName}`); }
    const pair = runGame();
    const question = car(pair);
    const correctAnswer = String(cdr(pair));
    const answer = String(readlineSync.question(`Question: ${question} \nYour answer: `));

    if (answer === correctAnswer) console.log('Correct!');
    else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${userName}`);
    }

    return runQuestion(num - 1);
  };
  runQuestion(numberOfQuestions);
};
