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

// function createReversedArray() {
//   let args = Array.from(arguments);
//   const reversedArray = args.toReversed();
//   return reversedArray;
// }

// console.log(createReversedArray(12, 85, 37, 4));
// console.log(createReversedArray(164, 48, 291));
// console.log(createReversedArray(412, 371, 94, 63, 176));
// console.log(createReversedArray());

//  Використовуючи if...else напиши код, який буде запитувати у користувача "Яка офіційна назва JavaScript?".
//    Якщо користувач вводить "ECMAScript", то показати за допомогою alert("Вірно!")
//    У інших випадках показати "Не знаєте? ECMAScript!"

// let message = prompt('Яка офіційна назва JavaScript?');
// if (message.toLowerCase() === 'ECMAScript'.toLowerCase()) {
//   alert('Вірно!');
// } else {
//   alert('Не знаєте? ECMAScript!');
// }

//  Напишіть цикл, який виводить у консоль числа від max до min у порядку зменшення.
// У консоль виведіть усі парні числа від max  до min

// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i--) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// При завантаженні сторінки користувачу пропонується у prompt ввести число.
//     Те, що вводить користувач, додається до значення змінної total.
// Операція вводу числа триває до тих пір, поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив вводити числа і натиснув на кнопку Cancel,
//     показувати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку, що користувач ввів саме число, а не довільні символи, не потрібно.

// let message = prompt('Введіть число');
// let total = 0;
// do {
//   total += Number(message);
//   message = prompt('Введіть число');
// } while (message !== null);

// alert(`Загальна сума введених чисел дорівнює ${total}`);

//Напиши код, який буде запитувати логін за допомогою prompt та логувати результат у консоль браузера.
// Якщо користувач вводить "Адмін", то prompt запитує пароль.Якщо нічого не введено або натиснута клавіша Esc,
//     вивести рядок "Відмінено"
//     У іншому випадку вивести рядок "Я вас не знаю!"

// Пароль перевіряти так:
// якщо введено пароль "Я головний", то вивести "Вітаю!",
//     у іншому випадку виводити рядок "Невірний пароль!".

const userImput = prompt(`Введіть логін`);
if (userImput === 'Адмін') {
  const userPassword = prompt(`Введіть пароль`);
  if (userPassword === 'Я головний') {
    console.log('Вітаю!');
  } else {
    console.log('Невірний пароль!');
  }
} else if (!userImput) {
  console.log('Відмінено');
} else {
  console.log('Я вас не знаю!');
}

//Дано рядок, який складається із символів.Наприклад, 'abcde'.
//     Перевірте, що першим символом цього рядка є літера 'a'.
//  Якщо це так - вивести "так", у іншому випадку вивести "ні"

// const string = 'abcde';
// const string2 = 'bcde';

// function name(str, symbol) {
//   if (str[0] === symbol) {
//     return 'так';
//   } else {
//     return 'ні';
//   }
// }

// console.log(name(string, '10'));
// console.log(name(string2, 'c'));
