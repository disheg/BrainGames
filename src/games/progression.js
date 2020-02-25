import { cons } from '@hexlet/pairs';
import runEngine from '..';
import randomInteger from '../utils';

const progressionLength = 10;
const randomProgression = () => {
  const arr = [];
  let randomInt = randomInteger(1, progressionLength);
  const progression = randomInteger(1, 5);
  for (let i = 0; i < 10; i += 1) {
    arr.push(randomInt);
    randomInt += progression;
  }

  return arr;
};

const description = 'What number is missing in the progression?';

const runBrainProgression = () => {
  const arr = randomProgression();
  const randomHideElement = randomInteger(1, progressionLength) - 1;
  const correctAnswer = arr[randomHideElement];
  arr[randomHideElement] = '..';
  const question = arr.join(' ');

  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => runEngine(description, runBrainProgression);
