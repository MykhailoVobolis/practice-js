// строгий режим

'use strict';

// создание массива

function calculateArray(x) {
  let testArray = [];
  for (let index = 0; index < 100000; index++) {
    let element = Math.round(Math.random() * 100);
    testArray.push(element);
  }
  return testArray;
}
console.log(calculateArray());

// НАИБОЛИШЕЕ ЧИСЛО МАССИВА

const t3 = performance.now();

const maxArrayElement = numberArray => {
  const sortedNumberArray = numberArray.toSorted((a, b) => a - b);
  return `Наибольшее число массива: ${
    sortedNumberArray[sortedNumberArray.length - 1]
  }`;
};

// console.log(maxArrayElement());

console.log(
  maxArrayElement([
    19, 48, 34, 20, 5, 10, 489, 499, 38, 47, 598, 192, 109, 701, 498, 93, 93,
    399, 192, 499, 92, 0, 325, 532, 183, 621, 184, 619, 172, 398, 308, 298, 698,
    700, 583, 568, 342, 432,
  ])
);

const t4 = performance.now();
console.log('Call to doSomething took ' + (t4 - t3) + ' milliseconds.');

// / БИНАРНЫЙ ПОИСК

const t0 = performance.now();

const elementsArray = numbers => {
  let newNumberArray = numbers;
  while (newNumberArray.length >= 2) {
    let numberNew = newNumberArray[Math.round(newNumberArray.length / 2)];
    newNumberArray = newNumberArray.filter(element => element > numberNew);
  }
  return `Наибольшее число массива: ${newNumberArray}`;
};

// console.log(elementsArray());

console.log(
  elementsArray([
    19, 48, 34, 20, 5, 10, 489, 499, 38, 47, 598, 192, 109, 701, 498, 93, 93,
    399, 192, 499, 92, 0, 325, 532, 183, 621, 184, 619, 172, 398, 308, 298, 698,
    700, 583, 568, 342, 432,
  ])
);

const t1 = performance.now();
console.log('Call to doSomething took ' + (t1 - t0) + ' milliseconds.');
