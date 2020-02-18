import { cons } from '@hexlet/pairs';
import greeting from '..';
import randomInteger from './utils.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGames = () => {
  const number = randomInteger(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const pair = cons(number, correctAnswer);
  return pair;
};

export default () => greeting(description, evenGames);
