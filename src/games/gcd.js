import { cons } from '@hexlet/pairs';
import greeting from '..';
import randomInteger from './utils.js';

function gcd_rec(a, b) {
    if (b) {
        return gcd_rec(b, a % b);
    } else {
        return Math.abs(a);
    }
}

const description = 'Find the greatest common divisor of given numbers.';

const brainGCD = () => {
  const numberOne = randomInteger(1, 100);
  const numberTwo = randomInteger(1, 100);
  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = gcd_rec(numberOne, numberTwo);

  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => greeting(description, brainGCD);
