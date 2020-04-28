import { cons } from '@hexlet/pairs';
import runEngine from '..';
import { randomInteger } from '../utils';

const progressionLength = 10;
const randomProgression = () => {
  const arr = [];
  const numberStartProgression = 0;
  const progression = randomInteger(1, 5);
  const r = (num) => {
    if (arr.length === progressionLength) return arr;
    arr.push(num);
    return r(num + progression);
  };
  return r(numberStartProgression);
};

const description = 'What number is missing in the progression?';

const genBrainProgression = () => {
  const progression = randomProgression();
  const indexHideElement = randomInteger(0, progressionLength - 1);
  const correctAnswer = String(progression[indexHideElement]);
  progression[indexHideElement] = '..';
  const question = progression.join(' ');

  return cons(question, correctAnswer);
};

export default () => runEngine(description, genBrainProgression);
