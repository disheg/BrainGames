import { cons } from '@hexlet/pairs';
import runEngine from '..';
import { randomInteger } from '../utils';

const randomProgression = (progressionLength, startValueProgression, progressionDiff) => {
  const arr = [];
  let progression = startValueProgression;
  for (let i = 0; i < progressionLength; i += 1) {
    arr.push(progression);
    progression += progressionDiff;
  }

  return arr;
};

const description = 'What number is missing in the progression?';

const genGameData = () => {
  const progressionLength = 10;
  const startValueProgression = 0;
  const progression = randomInteger(1, 5);
  const progressionArray = randomProgression(progressionLength, startValueProgression, progression);
  const indexHideElement = randomInteger(0, progressionLength - 1);
  const correctAnswer = String(progressionArray[indexHideElement]);
  progressionArray[indexHideElement] = '..';
  const question = progressionArray.join(' ');

  return cons(question, correctAnswer);
};

export default () => runEngine(description, genGameData);
