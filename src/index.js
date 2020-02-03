import readlineSync from 'readline-sync';

const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
}

const greeting = () => {
  console.log("Welcome to the Brain-games!\n");
  const name = userName();
  console.log(`Hello, ${name}`);
  return name;
}

export default greeting;
