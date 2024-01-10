// строгий режим

'use strict';

// создание массива чисел
let testArray = [];
function calculateArray() {
  for (let index = 0; index < 1000000; index++) {
    let element = Math.round(Math.random() * 112) + index;

    testArray.push(element);
  }
  return testArray;
}
console.log(calculateArray());

// создание массива уникальных элементов
const uniqueNames = new Set(testArray);
const newTestArray = Array.from(uniqueNames);
console.log(newTestArray);

// НАИБОЛИШЕЕ ЧИСЛО МАССИВА

const t3 = performance.now();

const maxArrayElement = numberArray => {
  const sortedNumberArray = numberArray.toSorted((a, b) => a - b);
  return `Наибольшее число массива: ${
    sortedNumberArray[sortedNumberArray.length - 1]
  }`;
};

console.log(maxArrayElement(newTestArray));

const t4 = performance.now();
console.log('Call to doSomething took ' + (t4 - t3) + ' milliseconds.');

// / БИНАРНЫЙ ПОИСК

const t0 = performance.now();

const elementsArray = numbers => {
  let newNumberArray = numbers;
  console.log(newNumberArray);
  while (newNumberArray.length >= 2) {
    let numberNew = newNumberArray[Math.round((newNumberArray.length - 1) / 2)];
    newNumberArray = newNumberArray.filter(element => element > numberNew);
    // console.log(newNumberArray);
  }
  return `Наибольшее число массива: ${newNumberArray}`;
};

console.log(elementsArray(newTestArray));

const t1 = performance.now();
console.log('Call to doSomething took ' + (t1 - t0) + ' milliseconds.');
