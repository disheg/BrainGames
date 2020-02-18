import { cons } from '@hexlet/pairs';
import greeting from '..';
import randomInteger from './utils';

const progressionLength = 10;
const randomProg = () => {
  const arr = [];
  let randomInt = randomInteger(1, progressionLength);
  const prog = randomInteger(1, 5);
  for (let i = 0; i < 10; i += 1) {
    arr.push(randomInt);
    randomInt += prog;
  }

  return arr;
};

const description = 'What number is missing in the progression?';

const brainProg = () => {
  const arr = randomProg();
  const randomHideElement = randomInteger(1, progressionLength) - 1;
  const correctAnswer = arr[randomHideElement];
  arr[randomHideElement] = '..';
  const question = arr.join(' ');

  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => greeting(description, brainProg);
