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

const genGameData = () => {
  const question = randomInteger(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(String(question), correctAnswer);
};

export default () => runEngine(description, genGameData);
