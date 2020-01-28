import readlineSync from 'readline-sync';

const userName = () => {
  const name = readlineSync.question('Your answer: ');
  return name;
  
       
};

export default userName;
