import readlineSync from 'readline-sync';

const greeting = () => {
  console.log("Welcome to the Brain-games!\n");
  const userName = readlineSync.question('Your answer: ')
  console.log(`May I have your name? ${userName}`);
  console.log(`Hello, ${userName}`);
}

export default greeting;
