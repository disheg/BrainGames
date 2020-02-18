import { cons } from '@hexlet/pairs';
import greeting from '..';
import randomInteger from './utils';

const description = 'What is the result of the expression?';
const expCount = ['*', '-', '+'];

const mathOperation = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '*':
      return numberOne * numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '+':
      return numberOne + numberTwo;
    default:
      return 'Operation not found';
  }
};

const brainCalc = () => {
  const numberOne = randomInteger(1, 100);
  const numberTwo = randomInteger(1, 100);
  const expRand = expCount[randomInteger(1, 3) - 1];
  const correctAnswer = mathOperation(numberOne, numberTwo, expRand);
  const question = `${numberOne} ${expRand} ${numberTwo}`;

  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => greeting(description, brainCalc);
