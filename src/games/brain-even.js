import greeting from '..';
import readlineSync from 'readline-sync';

const randomInteger = (min, max) => {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.round(rand);
};

const evenGames = () => {
	const name = greeting();
	console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const quest = (cor) => {
		if (cor === 0) { return console.log(`Congratulations, ${name}`); }
		const number = randomInteger(1, 100);
		const isEven = number => number % 2 === 0;
		const answer = readlineSync.question(`Question: ${number} \nYour answer: `);
		const correctAnswer = isEven(number) ? 'yes' : 'no';

		if (answer === correctAnswer) console.log('Correct!');
		else {
			console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${name}`);
			return;
		}

		return quest(cor - 1);
	};
	return quest(3);
};

export default evenGames;
