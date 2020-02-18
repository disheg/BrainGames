import { cons } from '@hexlet/pairs';
import greeting from '..';
import randomInteger from './utils';

function gcdRec(a, b) {
  if (b) return gcdRec(b, a % b);
  return Math.abs(a);
}

const description = 'Find the greatest common divisor of given numbers.';

const brainGCD = () => {
  const numberOne = randomInteger(1, 100);
  const numberTwo = randomInteger(1, 100);
  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = gcdRec(numberOne, numberTwo);

  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => greeting(description, brainGCD);
