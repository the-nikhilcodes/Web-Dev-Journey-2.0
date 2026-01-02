function Person(name, age) {
    this.name = name;
    this.age = age;
}


//Example
function Animal(species, sound) {
    this.species = species;
    this.sound = sound;
}                           
Animal.prototype.makeSound = function() {
    return `${this.species} makes a ${this.sound} sound.`;
}

let dog = new Animal("Dog", "bark");
console.log(dog.makeSound());

// Example 2

function Drink(name){
    if(!new.target){
        throw new Error("Drink constructor must be called with 'new'");
    }
    this.name = name;
}   
let coffee = new Drink("Coffee");
console.log(coffee.name);   
