import { cons } from '@hexlet/pairs';
import runEngine from '..';
import randomInteger from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const runBrainPrime = () => {
  const question = randomInteger(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => runEngine(description, runBrainPrime);
