import readlineSync from 'readline-sync';
import greeting from '..';

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.round(rand);
};

const evenGames = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const quest = (cor) => {
    if (cor === 0) { return console.log(`Congratulations, ${name}`); }
    const number = randomInteger(1, 100);
    const isEven = (num) => num % 2 === 0;
    const answer = readlineSync.question(`Question: ${number} \nYour answer: `);
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (answer === correctAnswer) console.log('Correct!');
    else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${name}`);
    }

    return quest(cor - 1);
  };
  return quest(3);
};

export default evenGames;
