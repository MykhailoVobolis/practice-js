// Сумма всех чисел до заданного number

function calculateTotal(number) {
  let sum = 0;
  let p = 0;
  while (p <= number) {
    sum = sum + p;
    p += 1;
    // можно применять p++
  }
  return sum;
}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(0));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
console.log(calculateTotal());

// Сумма всех чисел до заданного number через for

function calculateTotal(number) {
  let summ = 0;
  for (let index = 0; index <= number; index++) {
    summ = summ + index;
  }
  return summ;
}

console.log(calculateTotal(1));
console.log(calculateTotal(0));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
console.log(calculateTotal());

// Сумма четных чисел

function calculateEvenTotal(number) {
  let summa = 0;
  for (let index = 0; index <= number; index++) {
    if (index % 2 == 0) {
      summa = summa + index;
    } else {
      summa = summa + 0;
    }
  }
  return summa;
}

console.log(calculateEvenTotal(1));
console.log(calculateEvenTotal(3));
console.log(calculateEvenTotal(7));
console.log(calculateEvenTotal(18));
console.log(calculateEvenTotal(27));
console.log(calculateEvenTotal());

// let x = 1
// x %= 2
// console.log(x)

const start = 6;
const end = 17;
let number;
for (let index = start; index <= end; index++) {
  if (index % 5 === 0) {
    number = index;
    break;
  }
}

console.log(number);

const players = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((timeGames, players) => {
  return timeGames + players.playtime / players.gamesPlayed;
}, 0);

console.log(totalAveragePlaytimePerGame);

const heading = document.createElement('h1');
heading.classList.add('title');
heading.textContent = 'This is a heading';
console.log(heading);
