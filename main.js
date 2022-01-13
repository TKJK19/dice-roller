const rolls = [];
let i = 0;
while(i < 2) {
  let ran = Math.floor(Math.random() * 6) + 1;
  rolls.push(ran);
  i++;
}

const rollDice = () => {
  let dieOne = document.querySelector('#die_1');
  let dieTwo = document.querySelector('#die_2');
  let winner = document.querySelector('#winner');
  dieOne.src = `/assets/dice-${rolls[0]}.jpg`;
  dieTwo.src = `/assets/dice-${rolls[1]}.jpg`;
  winner.innerText = rolls[0] === rolls[1] ? 'Draw!' : rolls[0] > rolls[1] ? 'Player 1 wins!' : 'Player 2 wins!';
  console.dir(`Player one is ${rolls[0]}`);
  console.dir(`Player two is ${rolls[1]}`);
}