import readlineSync from 'readline-sync';

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
const greeting = () => {
  console.log('Welcome to the Brain-games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

export { randomInteger, greeting };
