import { cons } from '@hexlet/pairs';
import runEngine from '..';
import randomInteger from '../utils';

const description = 'What is the result of the expression?';
const operations = ['*', '-', '+'];

const runOperation = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '*':
      return numberOne * numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '+':
      return numberOne + numberTwo;
    default:
      return false;
  }
};

const runBrainCalc = () => {
  const numberOne = randomInteger(1, 100);
  const numberTwo = randomInteger(1, 100);
  const randomOperation = operations[randomInteger(1, 3) - 1];
  const correctAnswer = runOperation(numberOne, numberTwo, randomOperation);
  const question = `${numberOne} ${randomOperation} ${numberTwo}`;

  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => runEngine(description, runBrainCalc);
