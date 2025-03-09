//  Nested Object
const person = {
    name: 'John',
    age: 30,
    parent: {
        father: {
            name: 'Shelby',
            age: 55
        }
    }
};

console.log(person.parent.father.name);
console.log(person.parent.mother?.name); //optional chaining -> for handling the website crush

// Bracket Notation instead of Dot Notation
console.log(person['age']);
console.log(person['parent']['father']['age']);

// Map: 
// returns an array
const numbers = [2, 3, 1, 1, 8, 5];

const doubleNumbers = numbers.map(element => element * 2);
console.log(doubleNumbers);

const products = [{
    id: 1,
    name: 'product1',
    price: 10
}, {
    id: 2,
    name: 'product2',
    price: 20
},
{
    id: 3,
    name: 'product3',
    price: 30
}];

// Foreach
// doesn't return anything
products.forEach(product => {
    console.log(product);
})

// Filter
// returns an array
const newProducts = products.filter(product => product.price > 10);
console.log(newProducts);

const newProducts1 = products.filter(product => product.id != 3);
console.log(newProducts1);

// Find
// returns a object
const product = products.find(p => p.id === 2);
console.log(product);

// Class is a functional object
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    details() {
        console.log(`
            Junior Developer: ${this.name}, Age: ${this.age}
            `);
    }
}

const developer = new Person('Ameer Hamzah Daiyan', 23);
developer.details();

const developer2 = new Person('John Doe', 22);
developer2.details();

// Inheritance
class vehicle {
    constructor(color, model) {
        this.color = color;
        this.model = model;
    }

    move() {
        console.log('Moving...');
    }
}

class bus extends vehicle {
    constructor(color, model, capacity) {
        super(color, model);
        this.capacity = capacity;
    }

    route() {
        console.log('CTG to DHK');
    }
}

const greenLine = new bus('White', 'G14', 50);
greenLine.move();

// Encapsulation
class BankAccount {
    #balance; //private attribute
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.#balance = balance;
    }

    showBalance() {
        console.log(`Your balance is: ${this.#balance}`);
    }
}

const accountHolder = new BankAccount('01303994150', 500)
console.log(accountHolder.accountNumber)
accountHolder.showBalance();