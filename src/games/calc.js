import { cons } from '@hexlet/pairs';
import greeting from '..';

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const description = 'What is the result of the expression?';
const exp = ['*', '-', '+'];

const brainCalc = () => {
  const numberOne = randomInteger(1, 100);
  const numberTwo = randomInteger(1, 100);
  let expRand = exp[randomInteger(1, 3) - 1];
  let correctAnswer;

  switch (expRand) {
    case '*':
      correctAnswer = numberOne * numberTwo;
      break;
    case '-':
      correctAnswer = numberOne - numberTwo;
      break;
    case '+':
      correctAnswer = numberOne + numberTwo;
      break;
    default:
      expRand = '+';
      correctAnswer = numberOne + numberTwo;
  }

  const question = `${numberOne} ${expRand} ${numberTwo}`;

  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => greeting(description, brainCalc);
