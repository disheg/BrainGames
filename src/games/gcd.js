import { cons, car, cdr } from '@hexlet/pairs';
import greeting from '..';

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const NOD = (numberOne, numberTwo) => {
  if (numberTwo > numberOne) return NOD(numberTwo, numberOne);
  if (!numberTwo) return numberOne;
  return NOD(numberTwo, numberOne % numberTwo);
};

const description = 'Find the greatest common divisor of given numbers.';

const brainGCD = () => {
  const numberOne = randomInteger(1, 100);
  const numberTwo = randomInteger(1, 100);
  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = NOD(numberOne, numberTwo);

  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => greeting(description, brainGCD);
