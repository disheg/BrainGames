import { cons } from '@hexlet/pairs';
import runEngine from '..';
import randomInteger from '../utils';

const makeProgression = (length, first, diff) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const member = first + i * diff;
    progression.push(member);
  }

  return progression;
};

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const genGameData = () => {
  const first = randomInteger(0, 5);
  const difference = randomInteger(1, 5);
  const progression = makeProgression(progressionLength, first, difference);
  const indexHideElement = randomInteger(0, progressionLength - 1);
  const correctAnswer = String(progression[indexHideElement]);
  progression[indexHideElement] = '..';
  const question = progression.join(' ');

  return cons(question, correctAnswer);
};

export default () => runEngine(description, genGameData);
