import { cons } from '@hexlet/pairs';
import greeting from '..';

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const randomProg = () => {
  const arr = [];
  let randomInt = randomInteger(1, 10);
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
  const randomHideElement = randomInteger(1, 10) - 1;
  const correctAnswer = arr[randomHideElement];
  let question = '';

  for (let i = 0; i < arr.length; i += 1) {
    let newInd = arr[i];
    if (arr[i] === correctAnswer) {
      newInd = '.. ';
    }
    question += `${newInd} `;
  }

  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => greeting(description, brainProg);
