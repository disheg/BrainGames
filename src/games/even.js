import { cons } from '@hexlet/pairs';
import runEngine from '..';
import randomInteger from '../utils';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runBrainEven = () => {
  const question = randomInteger(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => runEngine(description, runBrainEven);
