// КОНВЕРТЕР ВАЛЮТ

// курс НБУ
const coursUsd = 38.0775;

let changeUsd = prompt('Введіть кількість USD для ккупівлі');

const change = usd => {
  if (isNaN(changeUsd)) {
    alert('Це не цифра. Введіть коректне значення.');
  } else {
    let resultUa = Math.round(coursUsd * changeUsd * 100) / 100;
    alert('Потрібна кількість готівки ' + resultUa + ' грн');
  }
};

console.log(change());
