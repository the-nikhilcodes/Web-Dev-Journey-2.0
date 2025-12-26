// Sum of N numbers

let n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log("Sum =", sum);

// table of a number

let num = 5;

for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + num * i);
}

// Reverse a number

let number = 1234;
let reverse = 0;

while (number > 0) {
  let digit = number % 10;
  reverse = reverse * 10 + digit;
  number = Math.floor(number / 10);
}

console.log("Reversed number:", reverse);


// Countdown from 5 to 1
let countdown = [];
let j = 5;
while (j > 0) {
  countdown.push(j);
  j--;
}
console.log(countdown);


// Collect favorite car brands from user input
let carCollections = ["BMW", "Audi", "Mercedes", "Toyota"];
let carList = [];

do{
  car = prompt(`Enter your favorite car brand:(type 'exit' to stop )`);
  
  if(car !== 'exit'){
    carCollections.push(car);
  }
} while(car !== 'exit');  
console.log("Car Collections:", carCollections);


// Multiply each number in an array by 2
let multiplydNumbers = [];
let numbers = [2,4,6 ,8,10];

for (let k = 0; k < numbers.length; k++) {
  multiplydNumbers.push(numbers[k] * 2);
}
console.log(multiplydNumbers);

