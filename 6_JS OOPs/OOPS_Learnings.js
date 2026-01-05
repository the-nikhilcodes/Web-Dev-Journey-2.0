let car = {
    make : 'Toyota',
    model : 'Camry',
    year : 2020,

    start : function() {
        return `${this.make} car got started in ${this.year}`;
},
};

console.log(car.start());

// Output: Toyota car got started in 2020


// Example

function Person(name, age) {
    this.name = name;
    this.age = age; 
}

let Ram = new Person('Ram', 25);
console.log(Ram.name);

function Animal(type, sound) {
    this.type = type;
    this.sound = sound;
}

Animal.prototype.speak = function() {
    return `The ${this.type} goes ${this.sound}`;
};


let Myarray = [1, 2, 3, 4, 5];
console.log(Myarray.length); // Output: 5

// OOPS Concepts in JavaScript

class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }  
    
    start() {
        return `${this.model} is a car from  ${this.brand}`;
    }
}


// Inheritance

class Car extends Vehicle {
    drive() {
        return `Driving a ${this.model} from ${this.brand}`;
    }
}

let myCar = new Car('Honda', 'Civic');
console.log(myCar.start());
console.log(myCar.drive());

let Vehicle1 = new Vehicle('Ford', 'Mustang');
console.log(Vehicle1.brand());

// Encapsulation

class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;   
    }
    getBalance() {
        return `$ ${this.#balance}`;
    }
}

let myAccount = new BankAccount();
console.log(myAccount.getBalance());


// Abstraction

class CoffeeMachine {
    start(){
        return 'Coffee Machine Started';
    }
    #brewCoffee() {
        return 'Brewing Coffee';
    }
}

let myCoffeeMachine = new CoffeeMachine();
console.log(myCoffeeMachine.start());
// console.log(myCoffeeMachine.#brewCoffee()); // Error: Private method

//Polymorphism

class Bird {
    fly() {
        return 'Flying';
    }
}

class penguin extends Bird {
    fly() {
        return 'Penguins cannot fly';
    }
}

let bird = new Bird();
let penguin = new penguin();
console.log(bird.fly());
console.log(penguin.fly());



// Getter and Setter

class Employee {
    #salary;
    constructor(name, salary) {

        if ( salary < 0) {
            throw new Error('Salary cannot be negative');
        }
        this._name = name;
        this.#salary = salary;
    }

    get salary() {
        return `You are not allowed to access salary`;
    }

    set salary(value) {
       if (value < 0) {
           console.log('Salary cannot be negative');
       } else {
           this._salary = value;
       }
    }
}
   let emp = new Employee('Ram', 50000);
   console.log(emp._salary); 
    emp.salary = -1000; // Output: Salary cannot be negative
   console.log(emp.salary); // Output: You are not allowed to access salary

