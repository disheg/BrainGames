import { cons } from '@hexlet/pairs';
import runEngine from '..';
import { randomInteger } from '../utils';

const description = 'What is the result of the expression?';
const operations = ['*', '-', '+'];

const calculateOperation = (numberOne, numberTwo, operation) => {
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

const genGameData = () => {
  const numberOne = randomInteger(1, 100);
  const numberTwo = randomInteger(1, 100);
  const operation = operations[randomInteger(0, operations.length - 1)];
  const correctAnswer = String(calculateOperation(numberOne, numberTwo, operation));
  const question = `${numberOne} ${operation} ${numberTwo}`;

  return cons(question, correctAnswer);
};

export default () => runEngine(description, genGameData);
