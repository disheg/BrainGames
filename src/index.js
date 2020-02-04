import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const numberOfQuestions = 3;

const greeting = (description, brainGames) => {
  console.log('Welcome to the Brain-games!\n');
  const name = userName();
  console.log(`Hello, ${name}`);
  console.log(description);

  const question = (cor) => {
    if (cor === 0) { return console.log(`Congratulations, ${name}`); }
    const pair = brainGames();
    const number = car(pair);
    const correctAnswer = String(cdr(pair));
    const answer = String(readlineSync.question(`Question: ${number} \nYour answer: `));

    if (answer === correctAnswer) console.log('Correct!');
    else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${name}`);
    }

    return question(cor - 1);
  };
  return question(numberOfQuestions);
};

export default greeting;
