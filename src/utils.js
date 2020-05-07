import readlineSync from 'readline-sync';

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export { randomInteger };
