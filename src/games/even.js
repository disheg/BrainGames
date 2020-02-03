import { cons, car, cdr } from '@hexlet/pairs';
import greeting from '..';

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.round(rand);
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGames = () => {
  const number = randomInteger(1, 100);
  const isEven = (num) => num % 2 === 0;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const pair = cons(number, correctAnswer);
  return pair;
};

export default () => greeting(description, evenGames);
