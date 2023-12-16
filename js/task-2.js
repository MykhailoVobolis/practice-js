'use strict';
// function getLastElementMeta(array) {
//   const result = ['x', 'y'];
//   const lastElementIndex = array.length - 1;
//   result[0] = lastElementIndex;
//   result[1] = array[lastElementIndex];
//   return result;
// }

// console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));
// console.log(getLastElementMeta(['apple', 'peach', 'pear']));
// console.log(getLastElementMeta(['apple', 'peach']));
// console.log(getLastElementMeta(['apple']));

// function getExtremeElements(array) {
//   const result = ['x', 'y'];
//   const lastElementIndex = array.length - 1;
//   result[0] = array[0];
//   result[1] = array[lastElementIndex];

//   return result;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

// function getSlice(array, value) {
//   if (array.indexOf(value) === -1) {
//     return (array = []);
//   } else {
//     return array.slice(0, array.indexOf(value) + 1);
//   }
// }

// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Mango'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Casey'));

// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (let i = 0; i < order.length; i++) {
//     sum += order[i];
//   }
//   return sum;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

// // Заданий масив
// let numbers = [1, 2, 3, 4, 5];

// // Ініціалізуємо змінну для зберігання суми
// let sum = 0;

// // Циклом for обходимо всі елементи масиву
// for (let i = 0; i < numbers.length; i++) {
//   // Додаємо кожен елемент до суми
//   sum += numbers[i];
// }

// // Виводимо результат
// console.log('Сума елементів масиву: ' + sum);

// function getEvenNumbers(start, end) {
//   let array = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }
//   return array;
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));
// console.log(getEvenNumbers());

// function createArrayOfNumbers(min, max) {
//   let array = [];
//   for (let index = min; index <= max; index++) {
//     array.push(index);
//   }
//   return array;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers());

// function checkStorage(storage, item) {
//   const lowercaseitem = item.toLowerCase();
//   if (storage.includes(lowercaseitem)) {
//     return `${lowercaseitem} is available to order!`;
//   } else {
//     return 'Sorry! We are out of stock!';
//   }
// }

// console.log(checkStorage(['apple', 'plum', 'pear'], 'plum'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pear'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'orange'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'carrot'));

// function getCommonElements(array1, array2) {
//   let resultArray = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       resultArray.push(array1[i]);
//     }
//   }
//   return resultArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (let value of order) {
//     sum += value;
//   }
//   return sum;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

function createReversedArray() {
  let args = Array.from(arguments);
  const reversedArray = args.toReversed();
  return reversedArray;
}

console.log(createReversedArray(12, 85, 37, 4));
console.log(createReversedArray(164, 48, 291));
console.log(createReversedArray(412, 371, 94, 63, 176));
console.log(createReversedArray());
