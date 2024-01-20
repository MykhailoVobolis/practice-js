'use strict';
// todo Напишіть функцію calcTotalPrice(stones, stonesName), яка приймає масив об'єктів та рядок із назвою каменя.
// Функція рахує і повертає загальну вартість каменів з таким іменем, ціною та кількістю з об'єкта

// const stonesArray = [
//   { name: 'Ізумруд', price: 1300, quantity: 4 },
//   { name: 'Брилліант', price: 2700, quantity: 6 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 150, quantity: 100 },
// ];

// const calcTotalPrice = (stones, stonesName) => {
//   for (const i of stones) {
//     if (i.name === stonesName) {
//       return i.price * i.quantity;
//     }
//   }
// };

// console.log(calcTotalPrice(stonesArray, 'Ізумруд'));

// const arrNumber = [4, 5, 3, 1, 2];
// Напишіть функцію, яка розвертає масив у зворотньому напрямку.Метод reverse() не використовувати

// function numbersArray(arr) {
//   const newArray = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArray.push(arr[i]);
//   }
//   return newArray;
// }

// Определить сезон года по названию месяца

const seasonsYear = [
  { winter: ['декабрь', 'январь', 'февраль'] },
  { spring: ['март', 'апрель', 'май'] },
  { summer: ['июнь', 'июль', 'август'] },
  { autumn: ['сентябрь', 'октябрь', 'ноябрь'] },
];

function seasonDefinition(month) {
  for (const i of seasonsYear) {
    if (Object.values(i).flat().includes(month.toLowerCase())) {
      return `Месяц ${month.toLowerCase()} является сезоном ${Object.keys(
        i
      ).join()}`;
    }
  }
}
console.log(seasonDefinition('Октябрь'));

// Завершите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на данный делитель. Первый аргумент - это массив чисел, а второй - делитель.

// function learnJavaScript() {
//   const divisibleBy = (numbers, divisor) => {
//     return numbers.filter(num => num % divisor === 0);
//   };
//   return divisibleBy([1, 2, 3, 4, 5, 6], 2);
// }

// console.log(learnJavaScript());

//Ваша функция принимает два аргумента:

// текущий возраст отца (лет)
// текущий возраст сына (лет)
// Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше).

function learnJavaScript() {
  const twiceAsOld = (dadYearsOld, sonYearsOld) => {
    return Math.abs(sonYearsOld * 2 - dadYearsOld);
  };
  return twiceAsOld(81, 40);
}

console.log(learnJavaScript());

// ООП классы и элементы классов

class User {
  constructor(firsname, lastname, raceteam) {
    this.firsname = firsname;
    this.lastname = lastname;
    this.raceteam = raceteam;
  }

  leaderChampionship() {
    return `Formula 1 race championship leader ${this.firsname} ${this.lastname} from the ${this.raceteam} team`;
  }
}

const user1 = new User('Max', 'Verstappen', 'RedBull');
const user2 = new User('Fernando', 'Alonso', 'Aston Martin');
const user3 = new User('Lando', 'Norris', 'Mclaren');

console.log(user1.leaderChampionship());
console.log(user2.leaderChampionship());
console.log(user3.leaderChampionship());
