// строгий режим

'use strict';

const pizzaPalace = {
  pizzas: ['Supercheese', 'Smoked', 'Four meats'],
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

console.log(pizzaPalace.order('Smoked'));
console.log(pizzaPalace.order('Four meats'));
console.log(pizzaPalace.order('Big Mike'));
console.log(pizzaPalace.order('Viennese'));

function foo() {
  console.log(this);
}

foo();

const user = {
  username: 'Poly',
  showThis() {
    console.log(this);
  },
};

user.showThis();

function showThis() {
  console.log('this in showThis: ', this);
}

// Викликаємо у глобальному контексті
showThis();

const book = {
  updateAuthor(newAuthor) {
    // ...
  },
};

book.updateAuthor('Jacob');
